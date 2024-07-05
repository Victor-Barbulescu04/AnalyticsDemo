// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var AnalyticsDemoHMI;
        (function (AnalyticsDemoHMI) {
            function StreamLocation() {
                let url = new URL(window.location.href);
                url.port = '8080';
                url.pathname = '/';
                //url.username = 'admin';
                //url.password = 'Beckhoff';
                return url.toString();
            }
            AnalyticsDemoHMI.StreamLocation = StreamLocation;
        })(AnalyticsDemoHMI = Functions.AnalyticsDemoHMI || (Functions.AnalyticsDemoHMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('StreamLocation', 'TcHmi.Functions.AnalyticsDemoHMI', TcHmi.Functions.AnalyticsDemoHMI.StreamLocation);
