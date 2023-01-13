import { Link } from "react-router-dom"

const Crud = () => {
    return (
        <div className="ManageItemsPage">
            <div className="row">
                <div className="col">
                    <h1>Edição de Cadastros</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>E-mail</th>
                                <th>Contato</th>
                                <th>Função</th>
                                <th>CNPJ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tartaruga Ninja Michelangelo</td>
                                <td>02/10/2020</td>
                                <td>
                                    <Link className='btn btn-primary' to='#'>view</Link><Link className='btn btn-primary' to='#'>edit</Link>
                                     <button className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Tartaruga Ninja Michelangelo</td>
                                <td>02/10/2020</td>
                                <td>
                                    <Link className='btn btn-primary' to='#'>view</Link><Link className='btn btn-primary' to='#'>edit</Link>
                                     <button className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Tartaruga Ninja Michelangelo</td>
                                <td>02/10/2020</td>
                                <td>
                                    <Link className='btn btn-primary' to='#'>view</Link><Link className='btn btn-primary' to='#'>edit</Link>
                                     <button className="btn btn-danger">delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Crud