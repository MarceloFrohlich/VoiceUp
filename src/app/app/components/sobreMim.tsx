const SobreMim: React.FC = () => {
    return (
        <section className="bg-slate-200 flex flex-col lg:flex-row items-center w-full">

            <div data-aos="fade-up" className="lg:w-1/2 w-full h-full md:flex justify-center">
                <div className="w-full lg:w-2/3 h-[600px] bg-fernandaBg bg-cover bg-center">
                </div>
            </div>

            <div data-aos="fade-up" className="w-full lg:w-1/2">
                <h1 className="text-4xl text-center lg:text-left font-bold pt-10 text-lime-700">Sobre Mim</h1>
                <div className="flex flex-col gap-6 w-full lg:w-2/3 text-justify py-10">
                    <div className="text-lg mx-3">
                        <p>
                            Olá! Sou Fernanda Cunha Fröhlich, especialista em marketing digital com uma
                            trajetória diversificada e rica em experiências. Minha paixão por contar histórias e
                            conectar pessoas através da comunicação levou-me a explorar várias áreas, desde
                            administração até marketing digital.

                        </p>
                    </div>

                    <div className="mx-3"> 
                        <p>
                            Formada em Gestão Hospitalar e com certificações em Assistente de Marketing e
                            Vendas, Fotografia e Organização de Eventos, eu me reinventei ao longo dos anos
                            para seguir minha verdadeira paixão: o marketing digital. Atualmente, sou
                            estrategista digital, ajudando empresas a definir objetivos claros, criar conteúdos
                            impactantes e gerenciar suas presenças online de maneira eficaz.
                        </p>
                    </div>

                    <div className="mx-3">
                        <p>
                            Além disso, tenho orgulho de ser certificada em Meta Ads pela Comunidade Sobral e
                            ser aluna de Pedro Sobral, um dos maiores gestores de tráfego do Brasil. Essa
                            formação me permite oferecer as melhores práticas e estratégias para as suas
                            campanhas de tráfego pago.
                        </p>
                    </div>
                    <p className="italic">“Tráfego pago é colocar o anúncio certo, na frente da pessoa certa, na hora certa”.
                        <span className="font-bold ml-3">Pedro Sobral</span></p>
                </div>
            </div>
        </section>
    )
}

export default SobreMim