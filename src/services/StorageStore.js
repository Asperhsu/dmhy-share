import Vue from 'vue';

const kebabToCamel = (s) => {
    return s.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
};

const camelToKebab = (string) => {
    return string
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
      .toLowerCase();
};

const createStore = (vm) => {
    let keyMappings = {};
    let state = {};
    let watch = {};

    vm.$localStorage.keys().map(key => keyMappings[kebabToCamel(key)] = key);
    Object.keys(keyMappings).map(dataKey => {
        let key = keyMappings[dataKey];
        state[dataKey] = vm.$localStorage.get(key);
        watch['state.' + dataKey] = function (value) {
            vm.$localStorage.set(key, value);
        };
    });

    return new Vue({
        mounted () {
            Object.keys(keyMappings).map(dataKey => {
                let key = keyMappings[dataKey];
                this.$localStorage.on(key, (newValue) => this.state[dataKey] = newValue);
            });
        },

        beforeDestroy () {
            Object.values(keyMappings).map(key => {
                this.$localStorage.off(key);
            });
        },

        data () { return {state}; },
        watch: watch,

        methods: {
            init (dataKey, defaultValue = null) {
                if (Object.hasOwnProperty(this.state, dataKey)) return;

                let key = camelToKebab(dataKey);
                let value = this.$localStorage.get(key, defaultValue);

                this.$localStorage.set(key, value);
                this.state[dataKey] = value;
            }
        },
    });
};

export default {
    install (_Vue, options) {
        _Vue.mixin({
            created () {
                if (this.$options.StorageStore) {
                    _Vue.prototype.$storageStore = createStore(this);
                }
            },
        });
    }
}