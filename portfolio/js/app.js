const projects = data.projects;

var vm = new Vue({
    el: '#app',
    data: {
        projects: data.projects,
        sides: data.sides
    }
});