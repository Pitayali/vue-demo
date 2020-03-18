
var components = [

];
export default {
    install: function (Vue, opts) {
        components.map(function (component) {
            Vue.component(component.name, component);
        });
    }
}