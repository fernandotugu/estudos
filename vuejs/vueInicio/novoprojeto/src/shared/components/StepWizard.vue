<template>
<div>
    <ol class="step-indicator">
        <li v-for="(step,index) in steps" :key="index" :class="[currentstep==index?'active':'',currentstep>index?'complete':'']">
            
            <div class="step">
                <i :class="step.icon_class"></i>
            </div> 
            <div class="caption hidden-xs hidden-sm">
                <span>{{step.title}}</span>
            </div>
            <label class="small font-weight-bold">Passo {{index+1}}</label>
        </li>
    </ol>
</div>
</template>

<style lang="scss" scoped>

$wizard-color-neutral: #ccc !default;
$wizard-color-active: #4183D7 !default;
$wizard-color-complete: #87D37C !default;
$wizard-step-width-height: 40px !default;
$wizard-step-font-size: 14px !default;


.step-wrapper {
    padding: 10px 0;
    display: none;
    
    &.active {
        display: block;
    }
}



.step-indicator {
    border-collapse: separate;
    display: table;
    margin-left: 0px;
    position: relative;
    table-layout: fixed;
    text-align: center;
    vertical-align: middle;
    padding-left: 0;
    padding-top: 10px;
    
    li {
        display: table-cell;
        position: relative;
        float: none;
        padding: 0;
        width: 1%;
        
        &:after {
            background-color: $wizard-color-neutral;
            content: "";
            display: block;
            height: 1px;
            position: absolute;
            width: 100%;
            top: $wizard-step-width-height/2;
        }
        
        &:after {
            left: 50%;
        }
        
        &:last-child {
            &:after {
                display: none;
            }
        }
        
        &.active {
            .step {
                border-color: $wizard-color-active;
                color: $wizard-color-active;
            }
            
            .caption {
                color: $wizard-color-active;
            }
        }
        
        &.complete {
            &:after {
                background-color: $wizard-color-complete;
            }
            
            .step {
                border-color: $wizard-color-complete;
                color: $wizard-color-complete;
            }
            
            .caption {
                color: $wizard-color-complete;
            }
        }
    }
    
    .step {
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid $wizard-color-neutral;
        color: $wizard-color-neutral;
        font-size: $wizard-step-font-size;
        height: $wizard-step-width-height;
        line-height: $wizard-step-width-height;
        margin: 0 auto;
        position: relative;
        width: $wizard-step-width-height;
        z-index: 1;
        
        &:hover {
            cursor: pointer;
        }
    }
    
    .caption {
        color: $wizard-color-neutral;
        padding: 11px 16px;
    }
}


</style>

<script>
export default {
    name:"step-wizard",
    props:{
        steps:{
            default:null,
            type:Array
        },
        currentstep:{
            default:0,
            type:Number
        }
    }
}
</script>