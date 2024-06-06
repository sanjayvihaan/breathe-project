import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const BarChart = () => {
    const options = {};
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
        {
            label: "New Customers",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "#4EA557",
            barThickness: 20, // Specify the width of the bars here

        },
        {
            label: "Existing Customers",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "#24463A",
            barThickness: 20, // Specify the width of the bars here
        },
        ],
    };

    const containerStyle = {
        width: '52%', // Set the width of the container
    };

    
    return (
        <div style={containerStyle}>
            <Bar data={data} options={options} className="barChart"/>
        </div>
    )
}

export default BarChart;