import{h as s,k as t,m as e,x as o}from"./q-ff4a3c43.js";const r=[{text:"Pragmatic gRPC 1",id:"pragmatic-grpc-1",level:1},{text:"proto file",id:"proto-file",level:2},{text:"Struct first or Proto first?",id:"struct-first-or-proto-first",level:3},{text:"code generation",id:"code-generation",level:3},{text:"Error handling",id:"error-handling",level:2},{text:"Deadline",id:"deadline",level:2},{text:"Interceptor and Metadata",id:"interceptor-and-metadata",level:2},{text:"Partial Update",id:"partial-update",level:2},{text:"Stream with Broadcast",id:"stream-with-broadcast",level:2},{text:"Sharing srv",id:"sharing-srv",level:3},{text:"Sharing map",id:"sharing-map",level:3},{text:"An intermediate Channel (Preferred)",id:"an-intermediate-channel-preferred",level:3},{text:"Maybe a counter?",id:"maybe-a-counter",level:3},{text:"sync.Cond",id:"synccond",level:3},{text:"Going distributed",id:"going-distributed",level:3},{text:"Continue",id:"continue",level:2},{text:"Refs",id:"refs",level:2}],d={title:"Pragmatic gRPC 1",meta:[],styles:[],links:[],frontmatter:{}},h={title:"Pragmatic gRPC 1"};function a(c){const n=Object.assign({h1:"h1",a:"a",span:"span",blockquote:"blockquote",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",h3:"h3",ol:"ol"},c.components);return e(o,{children:[e(n.h1,{id:"pragmatic-grpc-1",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#pragmatic-grpc-1",children:e(n.span,{class:"icon icon-link"})}),"Pragmatic gRPC 1"]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"This artical is based on proto3 and go"}),`
`]}),`
`,e(n.h2,{id:"proto-file",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#proto-file",children:e(n.span,{class:"icon icon-link"})}),e(n.code,{children:"proto"})," file"]}),`
`,e(n.p,{children:["To really start to build a gRPC service, it's good to check some rules for the ",e(n.code,{children:"proto"})," file."]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:["The ",e(n.code,{children:"package"})," field should contain version information, like ",e(n.code,{children:"HelloService.v1"})]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:["The request and response message should name with a certain rule, generally it will be the service RPC method name with a ",e(n.code,{children:"Request"})," or ",e(n.code,{children:"Response"})," suffix."]}),`
`,e(n.p,{children:"Like:"}),`
`]}),`
`]}),`
`,e(n.pre,{class:"language-protobuf",children:e(n.code,{class:"language-protobuf code-highlight",children:e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"rpc"})," ",e(n.span,{class:"token function",children:"HelloWorld"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token class-name",children:"HelloWorldRequest"}),e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token keyword",children:"returns"})," ",e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token class-name",children:"HelloWorldResponse"}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:"{"}),e(n.span,{class:"token punctuation",children:"}"}),`
`]})})}),`
`,e(n.p,{children:[`A good reference is
`,e(n.a,{href:"https://cloud.google.com/apis/design",children:"Goole API design guide"}),"."]}),`
`,e(n.p,{children:["Just keep in mind, protocol buffer, like ",e(n.code,{children:"go"}),", always have a default value, it can't differentiate an unset value from a default value. As an example, always keep ",e(n.code,{children:"0"})," as the unknown or unset value for ",e(n.code,{children:"enum"})," (you should do it in ",e(n.code,{children:"go"}),` either, always start
from `,e(n.code,{children:"iota+1"}),"):"]}),`
`,e(n.pre,{class:"language-protobuf",children:e(n.code,{class:"language-protobuf code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"enum"})," ",e(n.span,{class:"token class-name",children:"Hello"})," ",e(n.span,{class:"token punctuation",children:"{"}),` 
`]}),e(n.span,{class:"code-line",children:["	UNKNOWN ",e(n.span,{class:"token operator",children:"="})," ",e(n.span,{class:"token number",children:"0"}),e(n.span,{class:"token punctuation",children:";"}),`
`]}),e(n.span,{class:"code-line",children:["	STARTED ",e(n.span,{class:"token operator",children:"="})," ",e(n.span,{class:"token number",children:"1"}),e(n.span,{class:"token punctuation",children:";"}),`
`]}),e(n.span,{class:"code-line",children:["	RUNNING ",e(n.span,{class:"token operator",children:"="})," ",e(n.span,{class:"token number",children:"1"}),e(n.span,{class:"token punctuation",children:";"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.h3,{id:"struct-first-or-proto-first",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#struct-first-or-proto-first",children:e(n.span,{class:"icon icon-link"})}),"Struct first or Proto first?"]}),`
`,e(n.p,{children:["To start building your gRPC service, you can either choose to first define the ",e(n.code,{children:"proto"})," file or the ",e(n.code,{children:"go"})," struct. Let's consider these two approaches."]}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Struct first"}),`
`]}),`
`,e(n.p,{children:["Some packages will generate ",e(n.code,{children:"proto"})," definition from your ",e(n.code,{children:"struct"})," type, but I didn't try them out. The benefit of this approach is appealing, especially if you use an ORM like ",e(n.code,{children:"gorm"}),". The ",e(n.code,{children:"struct"})," will generate all the things you need, and it becomes your only source of truth."]}),`
`,e(n.p,{children:["I think this approach is poorly ",e(n.a,{href:"https://stackoverflow.com/questions/57064482/how-to-cast-convert-a-struct-to-protobuf",children:"supported"}),"."]}),`
`,e(n.p,{children:["Generally, I preper write ",e(n.code,{children:"proto"})," file first, it's really easy to use ",e(n.code,{children:"proto"})," file to work with the front end or other teams to finalize the API."]}),`
`,e(n.ol,{start:"2",children:[`
`,e(n.li,{children:"Proto first"}),`
`]}),`
`,e(n.p,{children:["With all the code generated from your ",e(n.code,{children:"proto"})," file, there is a tendency to think ",e(n.code,{children:"proto"})," file as your source of truth. Don't. The ",e(n.code,{children:"proto"})," file mostly belongs to the ",e(n.code,{children:"controller"}),", it shouldn't couple with your business logic or database interactions."]}),`
`,e(n.p,{children:["Another problem is you can't easily cast your ",e(n.code,{children:"struct"})," type to ",e(n.code,{children:"proto"})," generated ",e(n.code,{children:"struct"})," type (the ",e(n.code,{children:"proto.Message"})," type). The generated type has some additional fields. An easy solution is to use the ",e(n.code,{children:"gogofaster"}),` binary of
`,e(n.a,{href:"https://github.com/gogo/protobuf",children:"gogoprotobuf"}),", like:"]}),`
`,e(n.pre,{class:"language-protobuf",children:e(n.code,{class:"language-protobuf code-highlight",children:e(n.span,{class:"code-line",children:["protoc ",e(n.span,{class:"token operator",children:"--"}),"proto_path proto  ",e(n.span,{class:"token operator",children:"--"}),"gogofaster_out",e(n.span,{class:"token operator",children:"="}),e(n.span,{class:"token string",children:'"plugins=grpc:."'})," ",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token operator",children:"/"}),"proto",e(n.span,{class:"token comment",children:`/*.proto
`})]})})}),`
`,e(n.p,{children:["This package provides lots of extensions to customize the ",e(n.code,{children:"[golang/protobuf](https://github.com/golang/protobuf)"}),". Like the support of go data type and marshaller function."]}),`
`,e(n.p,{children:["The problem is the helpful library is ",e(n.a,{href:"https://github.com/gogo/protobuf/issues/691",children:"looking for new ownership"}),`, and it
didn't support the newer version of go protocol buffer API.`]}),`
`,e(n.p,{children:["Go has two versions of protocol buffer library, ",e(n.a,{href:"https://pkg.go.dev/github.com/golang/protobuf",children:"v1"})," and ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/protobuf",children:"v2"}),". The newer version has many improvements like the ",e(n.a,{href:"https://blog.golang.org/protobuf-apiv2",children:"reflection api"}),"."]}),`
`,e(n.p,{children:[`If you want to start a new project with gRPC, I highly suggest you start with v2 API. Then
you have 2 choices to cast your `,e(n.code,{children:"struct"})," type to the ",e(n.code,{children:"proto"})," generated type."]}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[`Serillize and desrillize. Make sure you use the right library:
`,e(n.code,{children:"google.golang.org/protobuf/encoding/protojson"}),"."]}),`
`,e(n.li,{children:"Write some boilerplate code on your own."}),`
`]}),`
`,e(n.p,{children:"I think the only thing to consider is performance, just benchmark with your proto message you will conclude. Generally, I prefer the second one."}),`
`,e(n.h3,{id:"code-generation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#code-generation",children:e(n.span,{class:"icon icon-link"})}),"code generation"]}),`
`,e(n.p,{children:["With the new v2 API, here is an example to generate go code from ",e(n.code,{children:"proto"})," file."]}),`
`,e(n.pre,{class:"language-shell",children:e(n.code,{class:"language-shell code-highlight",children:[e(n.span,{class:"code-line",children:["protoc ",e(n.span,{class:"token parameter variable",children:"-I"}),e(n.span,{class:"token operator",children:"="}),"proto --go",e(n.span,{class:"token punctuation",children:"\\"}),"_out",e(n.span,{class:"token punctuation",children:"\\"}),e(n.span,{class:"token operator",children:"="}),"module",e(n.span,{class:"token punctuation",children:"\\"}),e(n.span,{class:"token operator",children:"="}),"github.com/hello/hello:. ",e(n.span,{class:"token punctuation",children:"\\"}),`
`]}),e(n.span,{class:"code-line",children:["--go-grpc_out",e(n.span,{class:"token operator",children:"="}),"module",e(n.span,{class:"token operator",children:"="}),"github.com/hello/hello:. ",e(n.span,{class:"token punctuation",children:"\\"}),`
`]}),e(n.span,{class:"code-line",children:["./proto/",e(n.span,{class:"token punctuation",children:"\\"}),`*.proto
`]})]})}),`
`,e(n.p,{children:["In every ",e(n.code,{children:"proto"})," file, add a line to specify the ",e(n.a,{href:"https://github.com/protocolbuffers/protobuf-go/releases#v1.21-generator",children:"go module"}),":"]}),`
`,e(n.pre,{class:"language-protobuf",children:e(n.code,{class:"language-protobuf code-highlight",children:e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"option"})," go_package ",e(n.span,{class:"token operator",children:"="})," ",e(n.span,{class:"token string",children:'"github.com/hello/hello/yourModule/pb"'}),e(n.span,{class:"token punctuation",children:";"}),`
`]})})}),`
`,e(n.p,{children:["And the generated code will be put into the ",e(n.code,{children:"pb"}),` folder under every specific
module.`]}),`
`,e(n.h2,{id:"error-handling",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#error-handling",children:e(n.span,{class:"icon icon-link"})}),"Error handling"]}),`
`,e(n.p,{children:["In the ",e(n.code,{children:"restful"})," API, sometimes people put an error code and error message in every response (which is a bad practice). An example with ",e(n.code,{children:"proto"})," will be:"]}),`
`,e(n.pre,{class:"language-protobuf",children:e(n.code,{class:"language-protobuf code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"message"})," ",e(n.span,{class:"token class-name",children:"Response"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token builtin",children:"string"})," data ",e(n.span,{class:"token operator",children:"="})," ",e(n.span,{class:"token number",children:"1"}),e(n.span,{class:"token punctuation",children:";"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token builtin",children:"int32"})," code ",e(n.span,{class:"token operator",children:"="})," ",e(n.span,{class:"token number",children:"2"}),e(n.span,{class:"token punctuation",children:";"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token builtin",children:"string"})," error_msg ",e(n.span,{class:"token operator",children:"="})," ",e(n.span,{class:"token number",children:"3"}),e(n.span,{class:"token punctuation",children:";"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:["Don't do this in gRPC. gRPC error already contains the error code and the error message. If you got a response with code ",e(n.code,{children:"ok"}),", then it indicates the request is ",e(n.code,{children:"successful(?)"}),". To construct a gRPC error is simple:"]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:e(n.span,{class:"code-line",children:["status",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Error"}),e(n.span,{class:"token punctuation",children:"("}),"codes",e(n.span,{class:"token punctuation",children:"."}),"Internal",e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:'"request failed"'}),e(n.span,{class:"token punctuation",children:")"}),`
`]})})}),`
`,e(n.p,{children:"You can check the gRPC error type with:"}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:'//"google.golang.org/grpc/status"'}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"if"})," se",e(n.span,{class:"token punctuation",children:","})," ok ",e(n.span,{class:"token operator",children:":="})," status",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"FromError"}),e(n.span,{class:"token punctuation",children:"("}),"err",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),"ok ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"return"})," se",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Err"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:["You can read more about the gRPC error code and explanation ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes",children:"here"}),"."]}),`
`,e(n.p,{children:"For all the error codes, your application should only consider returning these:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["InvalidArgument ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 3"]}),`
`,e(n.li,{children:["NotFound ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 5"]}),`
`,e(n.li,{children:["AlreadyExists ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 6"]}),`
`,e(n.li,{children:["PermissionDenied ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 7"]}),`
`,e(n.li,{children:["FailedPrecondition ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 9"]}),`
`,e(n.li,{children:["Aborted ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 10"]}),`
`,e(n.li,{children:["OutOfRange ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 11"]}),`
`,e(n.li,{children:["DataLoss ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 15"]}),`
`,e(n.li,{children:["Unauthenticated ",e(n.a,{href:"https://pkg.go.dev/google.golang.org/grpc/codes#Code",children:"Code"})," = 16"]}),`
`]}),`
`,e(n.p,{children:[`If you want to dig more into the gRPC error, I suggest you to watch this
`,e(n.a,{href:"https://www.youtube.com/watch?v=g44zR3cyC-I&t=512s",children:"vedio"}),"."]}),`
`,e(n.h2,{id:"deadline",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#deadline",children:e(n.span,{class:"icon icon-link"})}),"Deadline"]}),`
`,e(n.p,{children:"It's best practice to use deadlines."}),`
`,e(n.p,{children:"You can check whether the client set a deadline with:"}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:["d",e(n.span,{class:"token punctuation",children:","}),"ok ",e(n.span,{class:"token operator",children:":="})," ctx",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Deadline"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"if"})," ",e(n.span,{class:"token operator",children:"!"}),"ok ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//return some error"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:["timeout ",e(n.span,{class:"token operator",children:":="})," d",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Sub"}),e(n.span,{class:"token punctuation",children:"("}),"time",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Now"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//check timeout range"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"if"})," timeout ",e(n.span,{class:"token operator",children:"<"})," ",e(n.span,{class:"token number",children:"5"}),e(n.span,{class:"token operator",children:"*"}),"time",e(n.span,{class:"token punctuation",children:"."}),"Second ",e(n.span,{class:"token operator",children:"||"})," timeout ",e(n.span,{class:"token operator",children:">"})," ",e(n.span,{class:"token number",children:"30"}),e(n.span,{class:"token operator",children:"*"}),"time",e(n.span,{class:"token punctuation",children:"."}),"Second ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//return some error"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:["But, for all the gRPC and ",e(n.code,{children:"gRPC-web"})," libraries among all the languages, I don't think every one of them will let you set deadlines in the client request. Just think twice to implement this check on your service."]}),`
`,e(n.p,{children:[`You can check for more about deadline propagation in this
`,e(n.a,{href:"https://www.youtube.com/watch?v=Z_yD7YPL2oE&list=FL_F0hJOcLaFNDptQDkcoSQA&index=3",children:"vedio"}),`
(and other best practices).`]}),`
`,e(n.h2,{id:"interceptor-and-metadata",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#interceptor-and-metadata",children:e(n.span,{class:"icon icon-link"})}),"Interceptor and Metadata"]}),`
`,e(n.p,{children:["Interceptor is like the ",e(n.code,{children:"middleware"})," in ",e(n.code,{children:"REST"})," framework. You can get all your need from ",e(n.a,{href:"https://github.com/grpc-ecosystem/go-grpc-middleware",children:"go-grpc-middleware"}),". The interceptor chain just works like a middleware chain in ",e(n.code,{children:"REST"})," framework."]}),`
`,e(n.p,{children:["Almost in every ",e(n.code,{children:"REST"})," framework, you can define a specific middleware for a specific controller or endpoint. Unfortunately, I haven't found an easy way to do this in ",e(n.code,{children:"gRPC"}),", you can only write interceptor for the whole server, after that, you can filter your routes in the interceptor, or you can put the code directly in the ",e(n.code,{children:"controller"}),"."]}),`
`,e(n.p,{children:[e(n.code,{children:"middleware"}),` chain uses metadata to pass data. Metadata in gRPC is the HTTP/2 version of HTTP headers. You can find a detailed explanation
`,e(n.a,{href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md",children:"here"}),"."]}),`
`,e(n.p,{children:`A lot of things can be done with interceptors using metadata and context, like
authentication and authorization.`}),`
`,e(n.p,{children:"To read data from metadata is easy:"}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:["md",e(n.span,{class:"token punctuation",children:","})," ok ",e(n.span,{class:"token operator",children:":="})," metadata",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"FromIncomingContext"}),e(n.span,{class:"token punctuation",children:"("}),"ctx",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"if"})," ",e(n.span,{class:"token operator",children:"!"}),"ok ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["    ",e(n.span,{class:"token comment",children:"//return some error"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:[e(n.code,{children:"md"})," is of type ",e(n.code,{children:"metadata.MD"})," which is ",e(n.code,{children:"map[string][]string"}),`. For example, to
get the trace id:`]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:e(n.span,{class:"code-line",children:["ids",e(n.span,{class:"token punctuation",children:","})," ok ",e(n.span,{class:"token operator",children:":="})," md",e(n.span,{class:"token punctuation",children:"["}),e(n.span,{class:"token string",children:'"x-b3-traceid"'}),e(n.span,{class:"token punctuation",children:"]"}),`
`]})})}),`
`,e(n.p,{children:[`This solved part of our problem, to read data from requests. If you want to pass
some data to other interceptor or `,e(n.code,{children:"controller"}),", you can use ",e(n.code,{children:"context"}),"."]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"type"})," key ",e(n.span,{class:"token builtin",children:"int"}),`
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//payloadKey is unexported, to prevent collisions with keys defined in other packages"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"var"}),` payloadKey key
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//Payload is a custom struct contain the data you want to pass on"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"type"})," Payload ",e(n.span,{class:"token keyword",children:"struct"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["    ID ",e(n.span,{class:"token builtin",children:"string"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:["First, we need an unexported type ",e(n.code,{children:"payloadKey"}),` as an unique identifier, which
won't be overwriten by other code or packages like an ordinary metadata name.`]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//newContext will create a new go `context` with the payload"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token function",children:"newContext"}),e(n.span,{class:"token punctuation",children:"("}),"ctx context",e(n.span,{class:"token punctuation",children:"."}),"Context",e(n.span,{class:"token punctuation",children:","})," payload ",e(n.span,{class:"token operator",children:"*"}),"Payload",e(n.span,{class:"token punctuation",children:")"})," context",e(n.span,{class:"token punctuation",children:"."}),"Context ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["    ",e(n.span,{class:"token keyword",children:"return"})," context",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"WithValue"}),e(n.span,{class:"token punctuation",children:"("}),"ctx",e(n.span,{class:"token punctuation",children:","})," payloadKey",e(n.span,{class:"token punctuation",children:","})," payload",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//FromContext can be used in all controllers to get the payload from `context`"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token function",children:"FromContext"}),e(n.span,{class:"token punctuation",children:"("}),"ctx context",e(n.span,{class:"token punctuation",children:"."}),"Context",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token operator",children:"*"}),"Payload",e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token builtin",children:"bool"}),e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	payload",e(n.span,{class:"token punctuation",children:","})," ok ",e(n.span,{class:"token operator",children:":="})," ctx",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Value"}),e(n.span,{class:"token punctuation",children:"("}),"payloadKey",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token operator",children:"*"}),"MetaPayload",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"return"})," payload",e(n.span,{class:"token punctuation",children:","}),` ok
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:["Combine with the above ",e(n.code,{children:"interceptor chain"}),":"]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token function",children:"UnaryInterceptor"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"})," grpc",e(n.span,{class:"token punctuation",children:"."}),"UnaryServerInterceptor ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:[" 	",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token keyword",children:"func"}),e(n.span,{class:"token punctuation",children:"("}),"ctx context",e(n.span,{class:"token punctuation",children:"."}),"Context",e(n.span,{class:"token punctuation",children:","})," req ",e(n.span,{class:"token keyword",children:"interface"}),e(n.span,{class:"token punctuation",children:"{"}),e(n.span,{class:"token punctuation",children:"}"}),e(n.span,{class:"token punctuation",children:","})," info ",e(n.span,{class:"token operator",children:"*"}),"grpc",e(n.span,{class:"token punctuation",children:"."}),"UnaryServerInfo",e(n.span,{class:"token punctuation",children:","})," handler grpc",e(n.span,{class:"token punctuation",children:"."}),"UnaryHandler",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token keyword",children:"interface"}),e(n.span,{class:"token punctuation",children:"{"}),e(n.span,{class:"token punctuation",children:"}"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token builtin",children:"error"}),e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//read data from metadata"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token operator",children:"..."}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//construct your payload"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token operator",children:"..."}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//return the new `context`"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token function",children:"handler"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token function",children:"newContext"}),e(n.span,{class:"token punctuation",children:"("}),"ctx",e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token operator",children:"&"}),"payload",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),"req",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:["That's only the case for unary interceptors, for stream interceptors, we can still use the unexported",e(n.code,{children:"payloadKey"}),"and",e(n.code,{children:"FromContext"}),", but we need a wrapped stream."]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//WrappedStream implement the grpc stream interface, but we need to modify"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"// the Context() method to return our new context with payload"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"type"})," WrappedStream ",e(n.span,{class:"token keyword",children:"interface"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	grpc",e(n.span,{class:"token punctuation",children:"."}),`ServerStream
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token function",children:"Context"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"})," context",e(n.span,{class:"token punctuation",children:"."}),`Context
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"type"})," wrappedStream ",e(n.span,{class:"token keyword",children:"struct"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	grpc",e(n.span,{class:"token punctuation",children:"."}),`ServerStream
`]}),e(n.span,{class:"code-line",children:["	parentCtx context",e(n.span,{class:"token punctuation",children:"."}),`Context
`]}),e(n.span,{class:"code-line",children:["	payload   ",e(n.span,{class:"token operator",children:"*"}),`Payload
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token function",children:"newWrappedStream"}),e(n.span,{class:"token punctuation",children:"("}),"ss grpc",e(n.span,{class:"token punctuation",children:"."}),"ServerStream",e(n.span,{class:"token punctuation",children:","})," payload ",e(n.span,{class:"token operator",children:"*"}),"Payload",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token operator",children:"*"}),"wrappedStream ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:[" 	",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token operator",children:"&"}),"wrappedStream",e(n.span,{class:"token punctuation",children:"{"}),"ss",e(n.span,{class:"token punctuation",children:","})," ss",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Context"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","})," payload",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//Context() will return our context with payload"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token punctuation",children:"("}),"w ",e(n.span,{class:"token operator",children:"*"}),"wrappedStream",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token function",children:"Context"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"})," context",e(n.span,{class:"token punctuation",children:"."}),"Context ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["    ",e(n.span,{class:"token keyword",children:"return"})," context",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"WithValue"}),e(n.span,{class:"token punctuation",children:"("}),"w",e(n.span,{class:"token punctuation",children:"."}),"parentCtx",e(n.span,{class:"token punctuation",children:","})," payloadKey",e(n.span,{class:"token punctuation",children:","})," w",e(n.span,{class:"token punctuation",children:"."}),"payload",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:`In this way, we utilize go's composition power, you don't need to modify any
existing code.`}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token function",children:"StreamInterceptor"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"})," grpc",e(n.span,{class:"token punctuation",children:"."}),"StreamServerInterceptor ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token keyword",children:"func"}),e(n.span,{class:"token punctuation",children:"("}),"srv ",e(n.span,{class:"token keyword",children:"interface"}),e(n.span,{class:"token punctuation",children:"{"}),e(n.span,{class:"token punctuation",children:"}"}),e(n.span,{class:"token punctuation",children:","})," ss grpc",e(n.span,{class:"token punctuation",children:"."}),"ServerStream",e(n.span,{class:"token punctuation",children:","})," info ",e(n.span,{class:"token operator",children:"*"}),"grpc",e(n.span,{class:"token punctuation",children:"."}),"StreamServerInfo",e(n.span,{class:"token punctuation",children:","})," handler grpc",e(n.span,{class:"token punctuation",children:"."}),"StreamHandler",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token builtin",children:"error"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//some code"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token operator",children:"..."}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token function",children:"handler"}),e(n.span,{class:"token punctuation",children:"("}),"srv",e(n.span,{class:"token punctuation",children:","}),e(n.span,{class:"token function",children:"newWrappedStream"}),e(n.span,{class:"token punctuation",children:"("}),"ss",e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token operator",children:"&"}),"payload",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:"With all the above, you can easily implement your authentication and authorization logic."}),`
`,e(n.p,{children:["But there is a problem, in ",e(n.code,{children:"REST"}),", the request headers, URL and method generally contain all the information you need for authorization: the ",e(n.code,{children:"authorization"})," header will contain information about the user identity, and the URL will tell you which resource the user requested, and the method is the user action. In gRPC, you still get the ",e(n.code,{children:"authorization"})," metadata, you can get user action from:"]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//The FullMethod will return a string contain gRPC package, service, rpc method"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//Remember the gRPC package is versioned? make sure update the gRPC package version won't break your authorization code"}),`
`]}),e(n.span,{class:"code-line",children:["info",e(n.span,{class:"token punctuation",children:"."}),`FullMethod
`]})]})}),`
`,e(n.p,{children:"But you will not have any information about what resources the user requested. Then, you need to put that information in the metadata if you want to do authorization in the interceptor. Or you will put the requested resources in the request message."}),`
`,e(n.p,{children:`I prefer the first approach, but carefully design your API, as data related to
your business logic is now in metadata and request message.`}),`
`,e(n.h2,{id:"partial-update",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#partial-update",children:e(n.span,{class:"icon icon-link"})}),"Partial Update"]}),`
`,e(n.p,{children:["gRPC uses a ",e(n.code,{children:"google.protobuf.FieldMask"}),` to describe
`,e(n.a,{href:"https://cloud.google.com/apis/design/design_patterns#partial_response",children:"partial update"}),"."]}),`
`,e(n.p,{children:["You can utilize reflect API in v2 to deal with the ",e(n.code,{children:"FieldMask"}),":"]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//check field mask existence"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"if"})," request",e(n.span,{class:"token punctuation",children:"."}),"FieldMask ",e(n.span,{class:"token operator",children:"!="})," ",e(n.span,{class:"token boolean",children:"nil"}),e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	request",e(n.span,{class:"token punctuation",children:"."}),"FieldMask",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Normalize"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//check if the field mask is valid"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"if"})," ok",e(n.span,{class:"token operator",children:":="}),"request",e(n.span,{class:"token punctuation",children:"."}),"FieldMaks",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"IsValid"}),e(n.span,{class:"token punctuation",children:"("}),"request",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"})," ",e(n.span,{class:"token operator",children:"!"}),"ok",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token boolean",children:"nil"}),e(n.span,{class:"token punctuation",children:","})," status",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Error"}),e(n.span,{class:"token punctuation",children:"("}),"codes",e(n.span,{class:"token punctuation",children:"."}),"InvalidArgument",e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:'"invalid field mask"'}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:["paths",e(n.span,{class:"token operator",children:":="}),"request",e(n.span,{class:"token punctuation",children:"."}),"FieldMask",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"GetPaths"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//the rest is on your own, you can do whatever you what with paths"}),`
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//for example, you can do partial update by your own without reflection since fv.(type) is realy annoying"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//notice the protocol buffer `[list](https://pkg.go.dev/google.golang.org/protobuf/reflect/protoreflect#List)` and `[map](https://pkg.go.dev/google.golang.org/protobuf/reflect/protoreflect#List)` type is not same as the go `array` or `map` type."}),`
`]}),e(n.span,{class:"code-line",children:["rft ",e(n.span,{class:"token operator",children:":="})," request",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"ProtoReflect"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["rft",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Range"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token keyword",children:"func"}),e(n.span,{class:"token punctuation",children:"("}),"fd protoreflect",e(n.span,{class:"token punctuation",children:"."}),"FieldDescriptor",e(n.span,{class:"token punctuation",children:","})," fv protoreflect",e(n.span,{class:"token punctuation",children:"."}),"Value",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token builtin",children:"bool"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//compare fd.JSONName() to the maskPaths value"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//get corresponse field value with fv.(type)"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.h2,{id:"stream-with-broadcast",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#stream-with-broadcast",children:e(n.span,{class:"icon icon-link"})}),"Stream with Broadcast"]}),`
`,e(n.p,{children:"The most exciting part about gRPC of course is its streaming ability. Though it's no easy feat to implement that for beginners of concurrency (like me). I hope I can ease your pain when implementing the gRPC streaming with broadcasting."}),`
`,e(n.p,{children:"The basics are:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:`Each handler runs in its own goroutine (each connection will have its own
goroutine)`}),`
`]}),`
`,e(n.p,{children:[`As documented in
`,e(n.a,{href:"https://github.com/grpc/grpc-go/blob/master/Documentation/joncurrency.md#servers",children:"Concurrency"}),":"]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:[`Each RPC handler attached to a registered server will be invoked in its own
goroutine. For example,
`,e(n.a,{href:"https://github.com/grpc/grpc-go/blob/master/examples/helloworld/greeter_server/main.go#L41",children:"SayHello"}),`
will be invoked in its own goroutine. The same is true for service handlers
for streaming RPCs, as seen in the route guide example
`,e(n.a,{href:"https://github.com/grpc/grpc-go/blob/master/examples/route_guide/server/server.go#L126",children:"here"}),`.
Similar to clients, multiple services can be registered to the same server.`]}),`
`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"chan"})," is not built for broadcast, it's one-to-one communication"]}),`
`]}),`
`,e(n.p,{children:["You will end up with something like ",e(n.code,{children:"map[string]chan"}),", the ",e(n.code,{children:"string"}),` is an
identifier to identify the goroutin (client connection), like a `,e(n.code,{children:"sessionID"}),`, or
`,e(n.code,{children:"tracingID"}),", or a random string, or ",e(n.code,{children:"userID"}),"."]}),`
`,e(n.p,{children:["Pay attention to the last case. Only when you can be sure the user can only log in to one instance, that is each user can only have a single active connection, or the above ",e(n.code,{children:"map"})," becomes to ",e(n.code,{children:"map[userID]map[connectionID]chan"}),". The ",e(n.code,{children:"chan"})," is created in the ",e(n.code,{children:"controller"})," indicating the exact goroutine (connection) which will receive messages from, and the ",e(n.code,{children:"controller"})," will pass the received message to the client."]}),`
`,e(n.p,{children:"Here is an oversimplified code:"}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token punctuation",children:"("}),"s ",e(n.span,{class:"token operator",children:"*"}),"server",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token function",children:"Subscribe"}),e(n.span,{class:"token punctuation",children:"("}),"req ",e(n.span,{class:"token operator",children:"*"}),"pb",e(n.span,{class:"token punctuation",children:"."}),"SubscribeRequest",e(n.span,{class:"token punctuation",children:","})," srv pb",e(n.span,{class:"token punctuation",children:"."}),"SubscribeServer",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token builtin",children:"error"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//get trace id or generated a random string or whatever you want to indicate this goroutine"}),`
`]}),e(n.span,{class:"code-line",children:["	ID",e(n.span,{class:"token operator",children:":="}),e(n.span,{class:"token string",children:'"randomString"'}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//create a chan to receive response message"}),`
`]}),e(n.span,{class:"code-line",children:["	conn ",e(n.span,{class:"token operator",children:":="})," ",e(n.span,{class:"token function",children:"make"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token keyword",children:"chan"})," ",e(n.span,{class:"token operator",children:"*"}),"pb",e(n.span,{class:"token punctuation",children:"."}),"SubscribeResponse",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"for"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token comment",children:"//receive message"}),`
`]}),e(n.span,{class:"code-line",children:["		response",e(n.span,{class:"token operator",children:":="}),e(n.span,{class:"token operator",children:"<-"}),`conn
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token comment",children:"//send to client"}),`
`]}),e(n.span,{class:"code-line",children:["		srv",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Send"}),e(n.span,{class:"token punctuation",children:"("}),"response",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:"Below are some approaches I saw or can think of:"}),`
`,e(n.h3,{id:"sharing-srv",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#sharing-srv",children:e(n.span,{class:"icon icon-link"})}),"Sharing ",e(n.code,{children:"srv"})]}),`
`,e(n.p,{children:["This will avoid this ",e(n.code,{children:"map"})," structure or maybe all the ",e(n.code,{children:"channel"})," things."]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token punctuation",children:"("}),"s ",e(n.span,{class:"token operator",children:"*"}),"server",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token function",children:"TestHandler"}),e(n.span,{class:"token punctuation",children:"("}),"req ",e(n.span,{class:"token operator",children:"*"}),"pb",e(n.span,{class:"token punctuation",children:"."}),"TestRequest",e(n.span,{class:"token punctuation",children:","})," srv pb",e(n.span,{class:"token punctuation",children:"."}),"TestServer",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token builtin",children:"error"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token operator",children:"..."}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.p,{children:["For a server streaming handler above, you can share the ",e(n.code,{children:"srv"}),` between
goroutines. The rest is up to you, you can put the `,e(n.code,{children:"srv"})," in a ",e(n.code,{children:"map"})," or ",e(n.code,{children:"slice"}),`
based on what you want. Just be careful as documented in
`,e(n.a,{href:"https://github.com/grpc/grpc-go/blob/master/Documentation/concurrency.md#streams",children:"Streams"}),":"]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:["When using streams, one must take care to avoid calling either ",e(n.code,{children:"SendMsg"}),` or
`,e(n.code,{children:"RecvMsg"}),` multiple times against the same
`,e(n.a,{href:"https://godoc.org/google.golang.org/grpc#Stream",children:"Stream"}),` from different
goroutines. In other words, it's safe to have a goroutine calling `,e(n.code,{children:"SendMsg"}),`
and another goroutine calling `,e(n.code,{children:"RecvMsg"}),` on the same stream at the same time.
But it is not safe to call `,e(n.code,{children:"SendMsg"}),` on the same stream in different
goroutines, or to call `,e(n.code,{children:"RecvMsg"})," on the same stream in different goroutines."]}),`
`]}),`
`,e(n.p,{children:["And you certainly need ",e(n.code,{children:"sync.Mutex"}),", I will talk about it later."]}),`
`,e(n.h3,{id:"sharing-map",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#sharing-map",children:e(n.span,{class:"icon icon-link"})}),"Sharing ",e(n.code,{children:"map"})]}),`
`,e(n.p,{children:["With the ",e(n.code,{children:"map"}),` structure previously mentioned, at some point, you always want to
modify the `,e(n.code,{children:"map"}),` structure in another goroutine. For example, you want to access
the `,e(n.code,{children:"map"})," and send a message to the ",e(n.code,{children:"chan"}),` in one goroutine, and you want to add
new connections or remove connections from the `,e(n.code,{children:"map"}),` in another goroutine, then it
comes to the `,e(n.code,{children:"sync.Mutex"}),", so beware of deadlocks."]}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:["	mu",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Lock"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token function",children:"doSomething"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	mu",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Unlock"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`]})]})}),`
`,e(n.p,{children:["If ",e(n.code,{children:"mu"})," is a ",e(n.code,{children:"sync.Mutex"})," lock, always ",e(n.code,{children:"Lock()"})," and ",e(n.code,{children:"Unlock()"}),` in the outer
function, do not `,e(n.code,{children:"Lock()"})," and ",e(n.code,{children:"Unlock"})," in ",e(n.code,{children:"doSomething()"}),`, as your code become
complicated, you will not notice when you `,e(n.code,{children:"Lock()"})," twice."]}),`
`,e(n.p,{children:"This approach is also sharing memory, and it is prone to deadlocks."}),`
`,e(n.h3,{id:"an-intermediate-channel-preferred",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#an-intermediate-channel-preferred",children:e(n.span,{class:"icon icon-link"})}),"An intermediate Channel (Preferred)"]}),`
`,e(n.p,{children:["As said in ",e(n.a,{href:"https://blog.golang.org/codelab-share",children:"Share Memory By Communicating"})]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"Do not communicate by sharing memory; instead, share memory by communicating."}),`
`]}),`
`,e(n.p,{children:["We can have an intermediate goroutine that has the ownership of the ",e(n.code,{children:"map"})," structure, by ownership I mean only this goroutine can modify the ",e(n.code,{children:"map"})," structure. Messages will be send to an intermediate channel ",e(n.code,{children:"Broadcast"}),", and the ",e(n.code,{children:"Broadcast"})," will modify the ",e(n.code,{children:"map"})," structure, or send messages to ",e(n.code,{children:"channel"})," according to the identifier. The ",e(n.code,{children:"Broadcast"})," has the ownership of the ",e(n.code,{children:"map"})," structure, and the data flows in a single direction."]}),`
`,e(n.p,{children:"Some code you can work with:"}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"func"})," ",e(n.span,{class:"token punctuation",children:"("}),"s ",e(n.span,{class:"token operator",children:"*"}),"server",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token function",children:"Subscribe"}),e(n.span,{class:"token punctuation",children:"("}),"req ",e(n.span,{class:"token operator",children:"*"}),"pb",e(n.span,{class:"token punctuation",children:"."}),"SubscribeRequest",e(n.span,{class:"token punctuation",children:","})," srv pb",e(n.span,{class:"token punctuation",children:"."}),"SubscribeServer",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token builtin",children:"error"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//get trace id or generated a random string or whatever you want to indicate this goroutine"}),`
`]}),e(n.span,{class:"code-line",children:["	ID",e(n.span,{class:"token operator",children:":="}),e(n.span,{class:"token string",children:'"randomString"'}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//create a chan to receive response message"}),`
`]}),e(n.span,{class:"code-line",children:["	conn ",e(n.span,{class:"token operator",children:":="})," ",e(n.span,{class:"token function",children:"make"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token keyword",children:"chan"})," ",e(n.span,{class:"token operator",children:"*"}),"pb",e(n.span,{class:"token punctuation",children:"."}),"SubscribeResponse",e(n.span,{class:"token punctuation",children:")"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token comment",children:"//an intermediate channel which incharge of the `map`"}),`
`]}),e(n.span,{class:"code-line",children:["	s",e(n.span,{class:"token punctuation",children:"."}),"broadcast ",e(n.span,{class:"token operator",children:"<-"})," ",e(n.span,{class:"token operator",children:"&"}),"broadcastPayload ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token comment",children:"//an unique identifier"}),`
`]}),e(n.span,{class:"code-line",children:["		ID",e(n.span,{class:"token punctuation",children:":"}),` ID
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token comment",children:"//the chan corresponse to the ID"}),`
`]}),e(n.span,{class:"code-line",children:["		Conn",e(n.span,{class:"token punctuation",children:":"}),` conn
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token comment",children:"//event to indicate add, remove or send message to broadcast channel"}),`
`]}),e(n.span,{class:"code-line",children:["		Event",e(n.span,{class:"token punctuation",children:":"})," EventEnum",e(n.span,{class:"token punctuation",children:"."}),`AddConnection
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:`
`}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"for"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token keyword",children:"select"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token keyword",children:"case"})," ",e(n.span,{class:"token operator",children:"<-"}),"srv",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Context"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Done"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["				s",e(n.span,{class:"token punctuation",children:"."}),"broadcast ",e(n.span,{class:"token operator",children:"<-"})," ",e(n.span,{class:"token operator",children:"&"}),"entity",e(n.span,{class:"token punctuation",children:"."}),"BroadcastPayload",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["					 ID",e(n.span,{class:"token punctuation",children:":"})," ID",e(n.span,{class:"token punctuation",children:","}),`
`]}),e(n.span,{class:"code-line",children:["					 Event",e(n.span,{class:"token punctuation",children:":"})," EventEnum",e(n.span,{class:"token punctuation",children:"."}),`RemoveConnection
`]}),e(n.span,{class:"code-line",children:["				",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:["				",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token boolean",children:"nil"}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token keyword",children:"case"})," response ",e(n.span,{class:"token operator",children:":="})," ",e(n.span,{class:"token operator",children:"<-"}),"conn",e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["				",e(n.span,{class:"token keyword",children:"if"})," status",e(n.span,{class:"token punctuation",children:","})," ok ",e(n.span,{class:"token operator",children:":="})," status",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"FromError"}),e(n.span,{class:"token punctuation",children:"("}),"srv",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Send"}),e(n.span,{class:"token punctuation",children:"("}),"response",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"})," ok ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["					",e(n.span,{class:"token keyword",children:"switch"})," status",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token function",children:"Code"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["					",e(n.span,{class:"token keyword",children:"case"})," codes",e(n.span,{class:"token punctuation",children:"."}),"OK",e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["						",e(n.span,{class:"token comment",children:"//noop"}),`
`]}),e(n.span,{class:"code-line",children:["					",e(n.span,{class:"token keyword",children:"case"})," codes",e(n.span,{class:"token punctuation",children:"."}),"Unavailable",e(n.span,{class:"token punctuation",children:","})," codes",e(n.span,{class:"token punctuation",children:"."}),"Canceled",e(n.span,{class:"token punctuation",children:","})," codes",e(n.span,{class:"token punctuation",children:"."}),"DeadlineExceeded",e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["						",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token boolean",children:"nil"}),`
`]}),e(n.span,{class:"code-line",children:["					",e(n.span,{class:"token keyword",children:"default"}),e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["						",e(n.span,{class:"token keyword",children:"return"})," ",e(n.span,{class:"token boolean",children:"nil"}),`
`]}),e(n.span,{class:"code-line",children:["			 ",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:["		 ",e(n.span,{class:"token punctuation",children:"}"}),e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.pre,{class:"language-go",children:e(n.code,{class:"language-go code-highlight",children:[e(n.span,{class:"code-line",children:[e(n.span,{class:"token comment",children:"//this goroutine has the ownership of the map[string]chan *pb.SubscribeResponse"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token keyword",children:"go"})," ",e(n.span,{class:"token keyword",children:"func"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token keyword",children:"for"})," v",e(n.span,{class:"token operator",children:":="}),e(n.span,{class:"token keyword",children:"range"})," s",e(n.span,{class:"token punctuation",children:"."}),"broadcast ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token comment",children:"//do something based on the event"}),`
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token keyword",children:"switch"})," v",e(n.span,{class:"token punctuation",children:"."}),"Event ",e(n.span,{class:"token punctuation",children:"{"}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token comment",children:"//add ID and its corresponding Conn to the map"}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token keyword",children:"case"})," EventEnum",e(n.span,{class:"token punctuation",children:"."}),"AddConnection",e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["				",e(n.span,{class:"token operator",children:"..."}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token comment",children:"//delete ID and its corresponding Conn from the map"}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token keyword",children:"case"})," EventEnum",e(n.span,{class:"token punctuation",children:"."}),"RemoveConnection",e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["				",e(n.span,{class:"token operator",children:"..."}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token comment",children:"//receive message from bussiness logic, send the message to suiteable Conn in the map as you like"}),`
`]}),e(n.span,{class:"code-line",children:["			",e(n.span,{class:"token keyword",children:"case"})," EventEnum",e(n.span,{class:"token punctuation",children:"."}),"ReceiveResponse",e(n.span,{class:"token punctuation",children:":"}),`
`]}),e(n.span,{class:"code-line",children:["				",e(n.span,{class:"token operator",children:"..."}),`
`]}),e(n.span,{class:"code-line",children:["		",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:["	",e(n.span,{class:"token punctuation",children:"}"}),`
`]}),e(n.span,{class:"code-line",children:[e(n.span,{class:"token punctuation",children:"}"}),`
`]})]})}),`
`,e(n.h3,{id:"maybe-a-counter",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#maybe-a-counter",children:e(n.span,{class:"icon icon-link"})}),"Maybe a counter?"]}),`
`,e(n.p,{children:["Without a ",e(n.code,{children:"map"})," to identify the single ",e(n.code,{children:"chan"})," used by the single connection, another approach I saw online is to use a counter. The counter will record the number of connections by a single ",e(n.code,{children:"user"})," or a custom ",e(n.code,{children:"subject"}),", single ",e(n.code,{children:"user"})," or ",e(n.code,{children:"subject"})," will share a ",e(n.code,{children:"chan"}),"(comparing to the above, each connection uses a single ",e(n.code,{children:"chan"}),"), you can use the ",e(n.code,{children:"sync.Mutex"})," or ",e(n.code,{children:"sync/atomic"})," to modify the counter when the new connection comes in or drop out. The counter will decide how many times you want to send to the ",e(n.code,{children:"chan"}),"."]}),`
`,e(n.h3,{id:"synccond",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#synccond",children:e(n.span,{class:"icon icon-link"})}),"sync.Cond"]}),`
`,e(n.p,{children:["If the use case is really simple, I think ",e(n.code,{children:"sync.Cond"})," is also a valid approach, but I never tried this."]}),`
`,e(n.p,{children:"I prefer the 3rd approach, it avoids memory sharing and the code is cleaner."}),`
`,e(n.h3,{id:"going-distributed",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#going-distributed",children:e(n.span,{class:"icon icon-link"})}),"Going distributed"]}),`
`,e(n.p,{children:["If you want to use a messaging system, like ",e(n.code,{children:"kafka"})," or ",e(n.code,{children:"NATS"}),", the idea is the same, use an intermediate ",e(n.code,{children:"channel"})," to manage your connections."]}),`
`,e(n.h2,{id:"continue",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#continue",children:e(n.span,{class:"icon icon-link"})}),"Continue"]}),`
`,e(n.p,{children:[`A lot of topics haven't been included, like gRPC-web, testing, gRPC-gateway, health check, profiling and so many things, I will continue with a 2nd post in the future.
Hope you like this one, if you have questions or suggestions, or how you solve the above problems, just submit an issue `,e(n.a,{href:"https://github.com/washanhanzi/washanhanzi.github.io",children:"here"}),", all are welcomed."]}),`
`,e(n.h2,{id:"refs",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#refs",children:e(n.span,{class:"icon icon-link"})}),"Refs"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://blog.gopheracademy.com/advent-2017/go-grpc-beyond-basics/",children:"gRPC Go: Beyond the basics"})}),`
`,e(n.li,{children:e(n.a,{href:"https://www.cnblogs.com/FireworksEasyCool/p/12750339.html",children:"Go gRPC 进阶-go-grpc-middleware 使用"})}),`
`,e(n.li,{children:e(n.a,{href:"https://www.youtube.com/watch?v=Z_yD7YPL2oE&list=FL_F0hJOcLaFNDptQDkcoSQA&index=1",children:"Best Practices for (Go) gRPC Services"})}),`
`,e(n.li,{children:e(n.a,{href:"https://www.usenix.org/conference/srecon19asia/presentation/sheerin",children:`Yes, No, Maybe? Error Handling with gRPC
Examples`})}),`
`,e(n.li,{children:e(n.a,{href:"https://blog.stackpulse.com/tech-blog/grpc-in-practice-directory-structure-linting-and-more/?mode=dark",children:"gRPC in Practice"})}),`
`,e(n.li,{children:e(n.a,{href:"https://djangogrpcframework.readthedocs.io/en/latest/patterns/partial_update.html",children:"Handling Partial Update"})}),`
`]})]})}function l(c={}){const{wrapper:n}=c.components||{};return n?e(n,Object.assign({},c,{children:e(a,c)})):a(c)}const p=()=>s(t,{children:s(l,{},3,null)},3,"-iLxVf+i");export{p as default,h as frontmatter,d as head,r as headings};
