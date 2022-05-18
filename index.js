new Vue({
  el: '#app',
  data: {
    name: '',
    course: '',
    time: '',
    students: [{id: 1, name: 'test', course: 'test', time: 'test'}]
  },
methods: {
  connect: function() {
    const nextid = this.students.length + 1;
    const nextname = this.name;
    const nextcourse = this.course;
    const nexttime = this.time;
    const nextstudent = {id: nextid, name: nextname, course: nextcourse, time: nexttime};
    this.students.push(nextstudent);
    this.name = '';
    this.course = '';
    this.time = '';
  }
}
})
