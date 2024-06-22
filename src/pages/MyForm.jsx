function MyForm() { 
    const save = (e) => {
        e.preventDefault(); //กันไม่ให้รีเฟรซ

        console.log('submit now');
    }
    return (

        <>
        <form onSubmit={save}>
            <input/>
            <button onClick={save} type="submit">Submit Data</button>
        </form>
        </>
    )
}
export default MyForm;