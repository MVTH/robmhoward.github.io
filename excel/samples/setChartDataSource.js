var ctx = new Excel.ExcelClientContext();
var chart = ctx.workbook.worksheets.getItem("Charts").charts.getItem("Chart1");	
chart.setData("A1:B4", Excel.ChartSeriesBy.columns);
ctx.executeAsync().then();