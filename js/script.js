const app = new Vue(
    {
        el: '#root',
        data: {
            emails: []
        },
        created() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (resp) => {
                    const newEmail = resp.data.response;
                    this.emails.push(newEmail);
                });
            }  
        }
    }
) 