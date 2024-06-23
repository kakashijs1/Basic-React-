import { useEffect } from "react";
import Swal from 'sweetalert2';
import Menu from "../components/Menu";

function MyUseEffect() {

    useEffect (() => {
        console.log('start component');
    })

    const handleShowAlert = () => {
        Swal.fire({
            title: 'สวัสดี',
            text: 'ลาก่อน',
            icon: 'info', // success , info , warning , danger, question 
            timer:1000 
        })
    }

    const showConfirmButton = () => {
        Swal.fire({
            title: 'ยืนยัน',
            text: 'ยืนยันทำรายการหรือไม่',
            icon: 'question',
            showCancelButton:true,
            showConfirmButton: true,
            cancelButtonText:'ยกเลิก',
            confirmButtonText:'ยืนยันการลบ',
            confirmButtonColor: 'green'

        }).then(res => {
            if (res.isConfirmed) {
                console.log('Click Confirm')
            } else {
                console.log('click cancel')
            }
        })
    }
    return (    
        <>
        <Menu />
        <div> 
        <h3>Use Effect </h3>
        <button onClick={handleShowAlert}>Click for Show SweetAlert</button>
        
        <button onClick={showConfirmButton}>Confirm Button</button>
        </div>
        </>
    )
}

export default MyUseEffect;