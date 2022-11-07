const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const hourly = document.getElementById("hourly");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const trafficNav = document.querySelector('.traffic-nav');
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");



alertBanner.innerHTML = `<div class="alert-banner">
                            <p>Alert: You have unread messages</p>
                            <p class="alert-banner-close">x</p>
                        </div>`;

alertBanner.addEventListener( 'click', e =>{
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = 'none';
    }
});


// data for traffic line graph

let trafficData = {
    
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
    datasets: [ 
        {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }
    ],
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 400,
		easing: 'easeOutQuart'
    },
    scales: {
        y: { beginAtZero: true}
    },
    plugins: {
        legend: {
        display: false
       }
    }
};


let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

function newChart(chart, labels, data) {
	chart.data.labels = labels;
	chart.data.datasets[0].data = data;
	chart.update();
}


trafficNav.addEventListener('click', (e)=>{
    let navBtn = e.target;
    let li = document.getElementsByClassName('traffic-nav-link');
    for(let i = 0; i < li.length; i++){
        li[i].classList.remove('active');
    }
    navBtn.classList.add('active');
    if(navBtn.textContent === 'Hourly'){
        let hourlyLineData = {
            labels: ["2" , "4" , "6" , "8" , "10" , "12" , "14" , "16" , "18" , "20" , "22" , "24"],
            datasets: [
                {
                    data : [18,10,9,24,72,55,100,75,66,47,88,31],
                    backgroundColor: 'rgba(116, 119, 191, .3)',
                    borderWidth: 1,
                }
            ],
        };
       newChart(trafficChart, hourlyLineData.labels, hourlyLineData.datasets[0].data);
    } else if (navBtn.textContent === 'Daily'){
        let dailyLineData = {
    
            labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
            datasets: [ 
                {
                    data: [100,500,200,600,400,800,1000],
                    backgroundColor: 'rgba(116, 119, 191, .3)',
                    borderWidth: 1,
                }
            ],
        };
       newChart(trafficChart, dailyLineData.labels, dailyLineData.datasets[0].data);
    } else if (navBtn.textContent === 'Weekly'){
        let weeklyLineData = {
    
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                    "4-10", "11-17", "18-24", "25-31"],
            datasets: [ 
                {
                    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,2500],
                    backgroundColor: 'rgba(116, 119, 191, .3)',
                    borderWidth: 1,
                }
            ],
        };
        newChart(trafficChart, weeklyLineData.labels, weeklyLineData.datasets[0].data);
    } else {
        let monthlyLineData = {
    
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [ 
                {
                    data: [150,50,60,200,400,600,800,500,300,900,1000,800],
                    backgroundColor: 'rgba(116, 119, 191, .3)',
                    borderWidth: 1,
                }
            ],
        };
        newChart(trafficChart, monthlyLineData.labels, monthlyLineData.datasets[0].data);
    }
 });




// data for daily traffic bar chart

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
         y: {beginAtZero: true}
    },
    plugins: {
        legend: {display: false}
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// data for mobile user pie chart

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
          position: 'right',
            labels: { 
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

send.addEventListener('click', () => {
    if(user.value === "" && message.value ==="") {
        alert("Please fill out user and message fields before sending.");
    } else if ( user.value === "") {
        alert("Please fill out user field.");
    } else if ( message.value === "") {
        alert("Please fill out the message field.");
    } else {
        alert(`Your message has been sent to ${user.value}.`);
    }
     
});