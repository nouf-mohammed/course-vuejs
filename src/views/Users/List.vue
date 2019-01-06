<template>
    <div class="users-list">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Edit</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users">
                    <td>{{index+1}}</td>
                    <td>{{user.empname}}</td>
                    <td>{{user.empid}}</td>
                    <td><router-link :to="{name: 'users-edit', params: {pk: user.pk}}">Edit</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                users: []
            }
        },
        mounted: function() {
            this.$http().get('employees').then((res) => {
                this.users = res.data;
            });
        }
    }
</script>

<style scoped>

</style>