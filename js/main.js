var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')
var siteList;
var visitBtns;



if (localStorage.getItem("sites") == null) {
    siteList = [];
} else {
    siteList = JSON.parse(localStorage.getItem("sites"))
    displayurl()
}




function add() {
   if(validateUrl()==true && validateUrlName()==true)
    {


        var aboutSite = {
            WebsiteName: siteNameInput.value,
            url: siteUrlInput.value
        }
        siteList.push(aboutSite)
        localStorage.setItem("sites", JSON.stringify(siteList));
        displayurl(siteList);

        clearform()
        console.log(siteList);
    } else {
    }
}



function displayurl() {
    var cartoona = "";
    for (var i = 0; i < siteList.length; i++) {
        cartoona += `<tr>
               <td> ${i + 1} </td>
                   <td> ${siteList[i].WebsiteName}  </td>
                   <td><button onclick="visitWebsite(event)" data-index="${i}" class="btn btn-warning">Visit</button></td>
                   <td> <button onclick="deleteurl(${i})" class="btn    btn-danger" >delete</button> </td>
                    </tr>
               
        `
    }
    document.getElementById("zz").innerHTML = cartoona;
}





function clearform() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
}




function deleteurl(index) {
    siteList.splice(index, 1)
    localStorage.setItem("sites", JSON.stringify(siteList));

    displayurl(siteList);
}



function validateUrlName() {
    var regex = /^[A-Za-z]{3,8}$/;
    if (regex.test(siteNameInput.value) == true) {
        siteNameInput.style.border = "none"
        return true
    } else {
        siteNameInput.style.border = "2px solid #dc3545"
        return false
    }
    // OR
    // return regex.test(siteNameInput.value);
}

function validateUrl() {
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    if (regex.test(siteUrlInput.value) == true) {
        siteUrlInput.style.border = "none"
        return true
    } else {
        siteUrlInput.style.border = "2px solid #dc3545"
        return false
    }
}



 function visitWebsite(e) {
        var websiteIndex = e.target.dataset.index;
        var httpsRegex = /^https?:\/\//;
        if (httpsRegex.test(siteList[websiteIndex].url)) {
            window.open(siteList[websiteIndex].url, '_blank');
        } else {
            window.open(`https://${siteList[websiteIndex].url}`, '_blank');
        }
    }














// function searchByName(term) {
//     var foundedName = [];
//     for (var i = 0; i < siteList.length; i++) {
//         if (siteList[i].WebsiteName.toLowerCase().includes(term.toLowerCase()) == true) {
//             foundedName.push(siteList[i])

//         }
//     }
//     displayurl(foundedName)
// }




// function searchByName() {
//     let x = document.getElementById("search").value;
//     var foundedName = [];
//     for (var i = 0; i < siteList.length; i++) {
//         if (siteList[i].WebsiteName.toLowerCase().includes(x.toLowerCase()) == true) {
//             foundedName.push(siteList[i])

//         }
//     }
//     displayurl(foundedName)
// }

