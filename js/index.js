const baseUri = "http://localhost:5180/api/Cars"

Vue.createApp({
    data() {
        return {
            nyliste:[],
            carslist: [],
            error: null,
            statuscode:null,
            getCarId: "",
            carId:8,
            carVendor:"Ford",
            carModel:"Mustang",
            carPrice:200000,
            deletecarId:1
        }
    },
     created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.getAllCars()
    },
    methods: {
        cleanList() {
            this.carslist = [];
            this.error = null;
            console.log("count cars : " + this.carslist.length);
        },
        //Read this for an example: https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
         getAllCars() {
            this.error = null;
             //axios call that returns all the elements from the webservice
            axios.get(baseUri)
            .then(response => {

             console.log("in function getAllCars");
             console.log("status code: "+ response.status );

             //add the returning data from the webservice to the variable carlists
             this.carslist = response.data;
             this.status = response.status;
              
             console.log("length of the carlist array " + this.carslist.length)


            })
            .catch(error => {
              //resultElement.innerHTML = generateErrorHTMLOutput(error);
              this.carslist = []
               this.error = error.message
              console.log("Error:" + this.error);
            })      
            
        },
        getByCarId(id){
            this.error = null;
            //axios call that returns the items from a specified user 
            uri = baseUri +"/"+id
            axios.get(uri)
            .then(response => {
            
            console.log("Uri: " + uri)

             console.log("in function getByUserId");
             console.log("status code: "+ response.status );

             //add the returning data from the webservice to the variable posts
            //  this.carslist = response.data;
             this.carslist = [];
             this.carslist.push(response.data);
             this.status = response.status;
              
             console.log("length of the carlists array " + this.carslist.length)
            })
            .catch(error => {
              this.carslist = []
              this.error = error.message
              console.log("Error:" + this.error);
            })      
        },
        PostCar(){
            this.error = null;
            axios.post(baseUri,{"id":this.carId,"vendor":this.carVendor,"model":this.carModel,"price":this.carPrice})
            .then(response => {
            
            console.log("URI: ")

             console.log("in post cars");
             console.log("status code: "+ response.status );

             //add the returning data from the webservice to the variable posts
             //this.carlists = response.data;
             this.status = response.status;
              
             console.log("length of cars array " + this.carlists.length)
            })
            .catch(error => {
              this.carlists = []
              this.error = error.message
              console.log("Error:" + this.error);
            })    
        },
        deleteByCarId(id){
            this.error = null;
            uri = baseUri +"/"+id
            //axios call that returns the items from a specified user 
            axios.delete(uri)
            .then(response => {
            
            console.log("Uri: " + uri)

             console.log("in function getByCarId");
             console.log("status code: "+ response.status );

             //add the returning data from the webservice to the variable posts
             this.carslist = response.data;
             this.status = response.status;
              
             console.log("length of the carlists array " + this.carslist.length)
            })
            .catch(error => {
              this.carslist = []
              this.error = error.message
              console.log("Error:" + this.error);
            })      
        }
        
       
       
    }
}).mount("#app")