<template>
    <div class="users-edit">
        <form @submit.prevent="save">

            <div class="form-group">
                <label>Profile Picture</label>

                <div v-if="user.profile_picture != null">
                    <p>Current picture:</p>
                    <img :src="user.profile_picture" alt="">
                    <a :href="user.profile_picture" download class="btn btn-warning">download</a>
                </div>

                <input type="file" class="form-control" ref="profilePicture">
            </div>

            <div class="form-group">
                <label>Resume</label>

                <div v-if="user.resume != null">
                    <a :href="user.resume" download class="btn btn-warning">download</a>
                </div>

                <input type="file" class="form-control" ref="resume">
            </div>

            <div class="form-group">
                <label>Name</label>
                <input v-model="user.empname" type="text" class="form-control" placeholder="Enter name">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input v-model="user.email" type="email" class="form-control" placeholder="Enter email">
            </div>

            <div class="form-group">
                <label>Department Name</label>
                <input v-model="user.deptname" type="text" class="form-control" placeholder="Enter department name">
            </div>

            <div class="form-group">
                <label>Extension</label>
                <input v-model="user.ext" type="text" class="form-control" placeholder="Enter extension">
            </div>

            <button type="submit" class="btn btn-success">Save</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                user: {}
            }
        },
        mounted: function() {
            var pk = this.$route.params.pk;
            this.$http().get('employees/' + pk + '/').then((res) => {
                this.user = res.data;
            });
        },
        methods: {
            save() {
                this.$store.commit('setUsername', this.user.empname);

                var photo = this.$refs.profilePicture.files[0];
                var resume = this.$refs.resume.files[0];

                var fd = new FormData();
                fd.append('profile_picture', photo);
                fd.append('resume', resume);
                fd.append('empid', this.user.empid);
                fd.append('empname', this.user.empname);
                fd.append('email', this.user.email);
                fd.append('deptname', this.user.deptname);
                fd.append('ext', this.user.ext);

                var pk = this.user.pk;
                this.$http().put(`employee/${pk}/update/`, fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                //this.$router.replace({name: 'users-list'});
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100px;

    }
</style>