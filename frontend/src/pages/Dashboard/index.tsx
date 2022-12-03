//TODO import refactor
import NavBar from "../../components/NavBar"
import {Table} from "../../components/Table"

const  Operational = () => {
  return (
    <div className="container w-full h-full bg-slate-300" >
      <NavBar />
      <div>Operational</div>
      <Table columns={[]} data={[]}/>

    </div>
  )
}

export default Operational