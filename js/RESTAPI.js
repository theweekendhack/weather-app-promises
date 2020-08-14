class RESTAPI
{

    getAPIData(endPOINT)
    {

        return new Promise((resolve, reject)=>{

            fetch(endPOINT)
            .then(response=>response.json())
            .then(json=>{

    
                console.log("Task 1");
        
                resolve(json);
            })
            .catch(()=>{
                reject();
            });
        });

        
    }

}

export default RESTAPI;