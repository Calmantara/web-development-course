// fetching json file
fetch("./file.json").
    then(response => response.json()).
    then(data => console.log(data)).
    catch(err => console.log(err))

// fetching api with json format
fetch("https://jsonplaceholder.typicode.com/todos/1").
    then(response => response.json()).
    then(data => console.log(data)).
    catch(err => console.log(err))

// apakah hanya fetch yang bisa digunakan? 
// modern website: 
//  - axios
//  - ajax

// AJAX for frontend

async function fetchStatistic() {
    const url = 'https://covid-193.p.rapidapi.com/statistics';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '803748d0c5mshc408c5a38aa4dbep1b0742jsn93ad8798b15e',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const statisticDoc = document.getElementById("statistic")
        statisticDoc.innerText = JSON.stringify(result.response)
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
