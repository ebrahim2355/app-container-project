const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem("appList");

    if(storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedAppData = getStoredApp();

    if(storedAppData.includes(id)){
        alert("You have already Marked the Book as Read")
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appList", data);
    }
}

const removeFromStorage = id => {
    const storedAppData = getStoredApp();
    const newStoredData = storedAppData.filter(appId => appId.toString() !== id.toString());
    localStorage.setItem("appList", JSON.stringify(newStoredData));
}

export {addToStoreDB, getStoredApp, removeFromStorage};