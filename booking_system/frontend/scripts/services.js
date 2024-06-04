  const servicesData = [ 
        { id: 1, name: "Haircut" },
        { id: 2, name: "Facial" },
        { id: 3, name: "Manicure" },
        { id: 4, name: "Pedicure" },
        { id: 4, name: "Body Streamlining" },
        // ... Add more services as needed
    ];
    
    const servicesSelect = document.getElementById("services");
    
    servicesData.forEach(service => {
        const option = document.createElement("option");
        option.value = service.id;
        option.text = service.name;
        servicesSelect.add(option);
    });