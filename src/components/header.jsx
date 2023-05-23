

const Header = () => {

    const divStyle = {
        backgroundImage:'url(enfermera-que-controla-pulso-muneca-paciente-femenino.jpg)',
        backgroundSize: 'cover',
        height: '350px',
        width: '800px',
        backgroundPosition: 'bottom',
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-evenly">
                <div className="w-2/6 flex flex-col items-center space-y-10">
                    <img className="w-96" src="https://res.cloudinary.com/dvldakcin/image/upload/v1684803381/uw2-public-demo-app/Enfermeras-integrales/n6getzltbzgovmoqw43n.png" alt="enfermeras integrales" />
                    <p className="text-base text-justify italic">Nuestra agencia de enfermería y cuidado es una empresa dedicada a proporcionar servicios de atención médica personalizados y de alta calidad a pacientes en hospitales y domicilios. Contamos con un equipo de enfermeros y enfermeras altamente capacitados y experimentados, comprometidos con el bienestar de nuestros pacientes y con la excelencia en el cuidado de la salud.</p>
                </div>
                <div className="rounded-md" style={divStyle} >
                </div>
            </div>

            <div className="flex flex-row items-center justify-evenly">

                <div className="flex flex-col text-center text-white">
                <div className="bg-blue-900	rounded-t-3xl px-20">
                    <h1 className="mb-3 mt-3">Contáctanos</h1>
                    <h2>Teléfonos de contacto</h2>
                    <h3 className="mb-3">55 1546 8422 | 55 2118 0144</h3>
                </div>
                <div className="bg-blue-200 rounded-b-3xl p-1">
                    <h1>Correo electrónico</h1>
                    <h2>enfermerasintegrales@live.com.mx</h2>
                </div>
                </div>

                <div>
                    <div className="bg-blue-200 rounded-3xl text-3xl w-96 h-60 flex items-end p-3">
                        <div>
                        <h1>"Tu salud</h1>
                        <h1>en nuestras manos</h1>
                        <h1 className="underline underline-offset-8">está en buenas manos"</h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header;