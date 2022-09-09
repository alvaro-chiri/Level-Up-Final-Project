const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
		token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

	  syncTokenFromSessionStore: () => {
		const token = sessionStorage.getItem("token");
		console.log("Application just loaded syncing the session storage token")
		if(token && token != "" && token != undefined) setStore({ token : token });
	  },

      login: async (emails, passwords) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emails,
            password: passwords,
          }),
        };

        try{
			const resp = await fetch(`${process.env.BACKEND_URL}/api/token`, opts)
				if (resp.status !== 200){
					alert("There has been an error");
					return false;
				}
	
				const data = await resp.json();
				console.log("This came from the backend", data);
				sessionStorage.setItem("token", data.access_token);
				setStore({ token : data.access_token })
				return true;
			}
		catch(error){
			console.error("There has been an error login in.")
		}
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
