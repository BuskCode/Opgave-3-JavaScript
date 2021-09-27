let app = vue.createAPP({
    data:function(){
        return{
            message: 'String Manipulation',
            normal:'',
            uppercase:'',
            lowercase:''
        }
    },
    methods: {
        myWord(){
            var word =document.getElementById("ids").value;

            this.normal = word;
            this.uppercase = word.uppercase();
            this.lowercase = word.lowercase();

        }
    }
})
app.mount('#app')