<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4>
          Students<RouterLink
            to="/student/create"
            class="btn btn-primary float-end"
            >Add Student
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student,idex) in this.students" :key="index">
<td>{{ student.id }}</td>
<td>{{ student.name }}</td>
<td>{{ student.course }}</td>
<td>{{ student.email }}</td>
<td>{{ student.phone }}</td>
            </tr>

        
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
   name:'students',
   data(){
     return {
students: []
}
},
mounted() {
  this.getStudents();

  console.log('I am here');

},
methods:{
  getStudents(){
    axios.get('http://localhost:8000/api/students').then(res =>{
      this.students = res.data.students

// console.log(this.students);
    })
  }
}
}
</script>
