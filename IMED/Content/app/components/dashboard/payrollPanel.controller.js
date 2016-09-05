import chartConfig from "./chartConfig";

class PayrollPanelController{
    constructor() {
        'ngInject';

        this.chartConfig = {
            options: chartConfig.options,
            series: [chartConfig.series.statuses],
            title: chartConfig.title
        }

        this.summaryPromise.then((results) => {
            this.summary = results.data;

            this.chartConfig.series[0].data = [
                {
                    name: 'SUBMITTED',
                    y: this.summary.submitted,
                    color: chartConfig.chartColors['submitted']
                },
                {
                    name: 'NOT SUBMITTED',
                    y: this.summary.notSubmitted,
                    color: chartConfig.chartColors['notSubmitted']
                }
            ];

        });
    }
}

export default PayrollPanelController;