import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";


ChartJS.register(Title, Tooltip, Legend, ArcElement);


const PieChart = () => {
    const options = {};
    const data = {
        labels: ["Websites", "Social Media", "Search Engine", "Email", "Referrals", "Others"],
        datasets: [
        {
            label: "Organic",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "#4EA557",
            barThickness: 20, // Specify the width of the bars here

        },
        {
            label: "Paid",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "#24463A",
            barThickness: 20, // Specify the width of the bars here
        },
        ],
    };

    const containerStyle = {
        width: '38%', // Set the width of the container
    };

    
    return (
        <div style={containerStyle}>
            <Pie data={data} options={options} className="barChart"/>
        </div>
    )
}

export default PieChart;