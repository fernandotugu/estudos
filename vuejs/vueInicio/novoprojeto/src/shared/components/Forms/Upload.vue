<template>
    <div class="SimpleUpload">
        <div class="ml-2" style="position: relative;margin-bottom: -20px;">
            <label class="small bg-white pl-1 pr-1" v-if="hasLabel">{{label}}</label>
        </div>
        <div class="dropzone-area mb-2">
            <vue-dropzone 
                id="myVueDropzone" 
                ref="myVueDropzone" 
                @vdropzone-file-added="onSelect" 
                :options="uploadOptions" 
                @vdropzone-error="onUploadError" 
                @vdropzone-success="onUploaded"
                v-on:vdropzone-sending="sendingEvent"
            />
        </div>
    </div>
</template>

<script>

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    name: 'SimpleUpload',
    data(){
        return {
            formParam:null
        }
    },
    components:{
        vueDropzone: vue2Dropzone
    },
    props:{
        label:{
            default:null,
            type:String
        },
        removeAfterUpload:{
            default:false,
            type:Boolean,
        },
        fieldParam:{
            default:'',
            type:String
        },
        params:{
            default:null,
            type:Object
        },
        onSelectFile:{
            default:null,
            type:Function
        },
        onError:{
            default:null,
            type:Function
        },
        onCompleted:{
            default:null,
            type:Function
        },
        api:{
            type:Object
        },
        pathApi:{
            type:String
        },
        maxFileSize:{
            default:5,
            type:Number
        },
        maxFile:{
            default:1,
            type:Number
        },
        messageInit:{
            default:"Arraste aqui o arquivo ou Clique aqui para selecionar",
            type:String
        },
        thumbnailWidth:{
            default:150,
            type:Number,
        },
        acceptedFiles:{
            default:null,
            type:String
        },
        thumbnailHeight:{
            default:150,
            type:Number,
        },
        parallelUploads:{
            default:null,
            type:Number
        },
        autoUpload:{
            default:true,
            type:Boolean
        }
    },
    methods : {
        sendingEvent: function (file, xhr, formData) {
            if(this.uploadsParam!=null){
                Object.keys(this.uploadsParam).forEach((key)=>{
                    formData.append(key,this.uploadsParam[key]);
                });
            }
        },
        clickUpload(){
            this.$refs.myVueDropzone.$el.click();
        },
        startUpload(){
            this.$refs.myVueDropzone.processQueue();
        },
        setParam(obj){
            this.formParam = obj;
        },
        onSelect(file){
            if(this.onSelectFile!=null){
                this.onSelectFile(file);
            }
        },
        onUploaded(file,response) {
            if(this.onCompleted!=null){
                let totFilesQueued= this.$refs.myVueDropzone.getQueuedFiles().length;
                let totFilesUploading = this.$refs.myVueDropzone.getUploadingFiles().length;
                let completed = false;
                if(totFilesQueued==0 && totFilesUploading==0){
                    completed = true;
                }
                if(this.removeAfterUpload){
                    this.$refs.myVueDropzone.removeFile(file);
                }
                this.onCompleted(file,response,completed);
            }
        },
        onUploadError(file,error){
            this.$refs.myVueDropzone.removeFile(file);
            let erro = error;
            if(erro==''){
                erro = "Falha ao fazer upload";
            }
            alert(erro);
            if(this.onError!=null){
                this.onError(file,error);
            }
        }
    },
    computed:{
        uploadsParam(){
            let uploadParams = this.params!=null  ? this.params : this.formParam;
            return uploadParams;
        },
        uploadOptions(){
            let dropzoneOptions = {
                autoProcessQueue:this.autoUpload,
                url: this.api.getPathApi()+'/'+this.pathApi,
                thumbnailWidth: this.thumbnailWidth,
                thumbnailHeight: this.thumbnailHeight,
                paramName: this.fieldParam,
                maxFiles:this.maxFile,
                maxFilesize: this.maxFileSize,
                headers: { "Authorization": 'Bearer '+localStorage.getItem('userXbw') },
                dictDefaultMessage:this.messageInit,
                dictFileTooBig:"O arquivo enviado é muito grande, por favor envie um arquivo menor!",
                dictMaxFilesExceeded:"Arquivo máximo de uploads excedido!"
            }
            if(this.parallelUploads!=null){
                dropzoneOptions['parallelUploads'] = this.parallelUploads;
            }
            if(this.acceptedFiles!=null){
                dropzoneOptions['acceptedFiles'] = this.acceptedFiles;
            }
            return dropzoneOptions;
        },
        hasLabel(){
            return this.label!=null
        }
    }
}
</script>