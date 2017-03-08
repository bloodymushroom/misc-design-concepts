import React, {Component} from 'react';
import Chart from 'chart.js';
import classNames from './skillsView.css'

// import Chart from 'chart.js';
// mobx
import store from '../mobx/Store'
import {observer} from 'mobx-react'

@observer 
class SkillChart extends Component {
  constructor(props) {
    super(props);

    this.languagesChart = this.languagesChart.bind(this);
    this.frameworksChart = this.frameworksChart.bind(this);
    this.renderChart = this.renderChart.bind(this);

    this.state = {
        labelSize: 15,
        titleSize: 10
    }
  }

  renderChart() {
    console.log(store.currentSkill)
    if (this.props.activeChart === 'Languages') {
      this.languagesChart();
    } else if (this.props.activeChart === 'Frameworks' ) {
      this.frameworksChart();
    } else if (this.props.activeChart === 'BackEnd') {
      this.backEndChart();
    } else {
      this.othersChart();
    }
  }

  languagesChart() {
    var ctx = document.getElementById("languages");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Javascript", "CSS/CSS3", "HTML5", "Ruby", "English"],
            datasets: [{
                label: 'Proficiency from 1 - Novice to 5 - Expert',
                data: [4, 4, 3, 1, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: false,
                text: 'Languages - Programming & Non-programming',
                fontSize: this.state.titleSize
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: this.state.labelSize
                    }
                }]
            }
        }
    });
  }

  frameworksChart() {
    var ctx = document.getElementById("frameworks");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["React/Native", "Angular", "Backbone", "Mobx", "Flux"],
            datasets: [{
                label: 'Proficiency from 1 - Novice to 5 - Expert',
                data: [4, 2, 2, 3, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: false,
                text: 'Front End Frameworks',
                fontSize: this.state.titleSize
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: this.state.labelSize
                    }
                }]
            }
        }
    });
  }

  othersChart() {
    var ctx = document.getElementById("other");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Webpack", "Wireframing", "TDD", "Git Workflow", "Agile/Scrum"],
            datasets: [{
                label: 'Proficiency from 1 - Novice to 5 - Expert',
                data: [4, 3, 2, 3, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: false,
                text: 'Other Skills',
                fontSize: this.state.titleSize
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: this.state.labelSize
                    }
                }]
            }
        }
    });
  }

  backEndChart() {
    var ctx = document.getElementById("backend");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Node/Express", "MongoDB", "MySQL", "Redis", "RESTful APIs"],
            datasets: [{
                label: 'Proficiency from 1 - Novice to 5 - Expert',
                data: [3, 3, 4, 1, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: false,
                text: 'Back End - Server and Database',
                fontSize: this.state.titleSize
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: this.state.labelSize
                    }
                }]
            }
        }
    })
  }

  componentDidUpdate() {
    this.renderChart();
  }

  componentDidMount() {
    this.renderChart();
  }

  render() {
    return (
      <div className={classNames.skillChartContainer}>
        <br />
        {this.props.activeChart === 'Languages' && <canvas className='chart' id='languages' ></canvas>}
        {this.props.activeChart === 'Frameworks' && <canvas className='chart' id='frameworks' ></canvas>}
        {this.props.activeChart === 'BackEnd' && <canvas className='chart' id='backend' ></canvas>}
        {this.props.activeChart === 'Other' && <canvas className='chart' id='other' ></canvas>}
      </div>
      )
  }
}

export default SkillChart;