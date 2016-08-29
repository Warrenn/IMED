import chartConfig from "./chartConfig";

class PayrollPanelController{
    constructor() {
        this.chartConfig= {
            options: chartConfig.options,
            series: [chartConfig.series.statuses],
            title: chartConfig.title
        }

        this.chartConfig.series[0].data = [
            {
                name: 'SUBMITTED',
                y: this.summary.submitted,
                color: chartConfig.chartColors['submitted']
            },
            {
                name: 'NOT SUBMITTED',
                y: this.summary.notsubmitted,
                color: chartConfig.chartColors['notsubmitted']
            }
        ];
    }
}

export default PayrollPanelController;