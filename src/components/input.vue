<template>
  <el-input 
  :type="type?type:'text'" 
  :value="value?value.toLowerCase():''" 
  :placeholder="placeholder?placeholder:''"
  :maxlength="maxlength?maxlength:20"
  :minlength="minlength?minlength:0"
  :clearable="clearable?clearable:false"
  :disabled="disabled?disabled:false"
  :size="size&&type!='textarea'?size:''"
  :name="name?name:''"
  :readonly="readonly?readonly:false"

  ></el-input>
</template>

<script>
export default {
  props: {
    type: String,
    value: String,
    placeholder: String,
    maxlength: Number,
    minlength: Number,
    clearable: Boolean,
    disabled: Boolean,
    size: String,
    name: String,
    readonly: Boolean,
  },
  data(){
    return {
    }
  },
  watch:{
    inputCode(val){
      
    }
  },
}
</script>

<style>

</style>