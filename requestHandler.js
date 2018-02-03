let exec = require("child_process").exec;


    function start(response) {
        console.log("Request handler 'start' was called.");
        let content = "empty";
        exec("find /", 
            {timeout: 10000, maxBuffer: 20000*1024},
            function(err, stdout, stderr){
                content = stdout;
                
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.write(content);
                response.end();
            });
    }

    function upload(response) {
        console.log("Request handler 'upload' was called.");
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Upload");
        response.end();
    }


exports.start = start;
exports.upload = upload;