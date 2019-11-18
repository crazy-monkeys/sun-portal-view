export default {
    emailTest: (rule, value, callback) => {
        // let emailReg =/^([a-z0-9A-Z]+[-|\\.]?)+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$/
        let emailReg = /^[a-zA-Z0-9_-]+([-_.]{0,}[A-Za-z0-9])+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (value.length == 0) {
            callback(new Error('Email is required'))
        } else {
            if (!emailReg.test(value)) {
                callback(new Error('Please enter the correct email format'))
            } else {
                callback()
            }
        }
    },
    resetForm(formRef, arr) {
        if (formRef) {
            if (formRef !== undefined) {
                formRef.clearValidate(arr);
            } else {
                this.$nextTick(() => {
                    formRef.clearValidate(arr);
                });
            }
        }
    },
    submitForm(formRef, fun) {
        formRef.validate(valid => {
            if (valid) {
                fun()
            } else {
                console.log("error submit!!");
                return false;
            }
        });
    },


}