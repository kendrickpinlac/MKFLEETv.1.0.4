import React from 'react';
import logo from '../../Assets/logo2portrait.png';
import '@fortawesome/fontawesome-free/css/all.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="bg-gray-50">
                {/* Hero Section */}
                <div className="min-h-screen pt-24 flex flex-col">
                    <section className="flex-grow pb-24 sm:pb-32 lg:pt-8 lg:pb-24 bg-gradient-to-r from-[#F5FCFC] to-[#FBA701]">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                                <div>
                                    <div className="text-center lg:text-left">
                                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Magu Klowi Transport Services</h1>
                                        <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                                            Embark on your journey hassle-free with our all-inclusive car rental service, where every ride comes with a trusted driver. Experience comfort, convenience, and peace of mind as you explore the world around you. Whether it's a scenic road trip or a bustling city adventure, we're here to elevate your travel experience. Sit back, relax, and let us drive you towards unforgettable memories.
                                        </p>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                onClick={() => window.location.href='/Cars'}
                                                className="inline-flex justify-center px-4 py-2 text-base font-bold text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                            >
                                                BOOK NOW!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="logo"
                                        src={logo}
                                        alt="Company Logo"
                                        style={{ maxHeight: '40rem', width: 'auto', paddingLeft: '5rem' }}
                                        draggable="false"
                                        onContextMenu={(e) => e.preventDefault()}
                                        onClick={(e) => e.preventDefault()}
                                        onDoubleClick={(e) => e.preventDefault()}
                                        onSelect={(e) => e.preventDefault()}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* About Us Section */}
                <section className="py-16 bg-[#F5FCFC]">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">About Us</h2>
                        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
                            We are a premier vehicle rental service provider committed to delivering exceptional travel experiences. Our fleet includes a wide range of vehicles to suit your needs, whether for leisure or business travel.
                        </p>
                    </div>
                </section>

                {/* Vehicle Fleet Section */}
                <section className="py-16 bg-white">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Vehicle Fleet</h2>
                        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Sedan */}
                            <div className="text-center">
                                <img src="https://via.placeholder.com/300" alt="Sedan" className="mx-auto"/>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">Sedans</h3>
                                <p className="mt-2 text-gray-600">Comfortable and fuel-efficient, perfect for city drives and long journeys.</p>
                            </div>
                            {/* SUV */}
                            <div className="text-center">
                                <img src="https://via.placeholder.com/300" alt="SUV" className="mx-auto"/>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">SUVs</h3>
                                <p className="mt-2 text-gray-600">Spacious and versatile, ideal for family trips and off-road adventures.</p>
                            </div>
                            {/* Luxury Car */}
                            <div className="text-center">
                                <img src="https://via.placeholder.com/300" alt="Luxury Car" className="mx-auto"/>
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">Luxury Cars</h3>
                                <p className="mt-2 text-gray-600">Experience the ultimate in comfort and style with our high-end luxury vehicles.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
<section className="py-16 bg-[#F5FCFC]">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="text-center">
                <p className="mt-2 text-gray-600">"Excellent service and very reliable. The car was in great condition and the driver was very professional."</p>
                <div className="mt-4 flex justify-center">
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                </div>
                <p className="mt-4 text-gray-900 font-semibold">- John Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="text-center">
                <p className="mt-2 text-gray-600">"Had an amazing experience with their luxury cars. Will definitely rent again!"</p>
                <div className="mt-4 flex justify-center">
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="far fa-star"></i>
                </div>
                <p className="mt-4 text-gray-900 font-semibold">- Jane Smith</p>
            </div>
            {/* Testimonial 3 */}
            <div className="text-center">
                <p className="mt-2 text-gray-600">"Great value for money. The booking process was smooth and hassle-free."</p>
                <div className="mt-4 flex justify-center">
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star" style={{ color: '#FFD700' }}></i>
                    <i className="fas fa-star-half-alt" style={{ color: '#FFD700' }}></i>
                    <i className="far fa-star"></i>
                </div>
                <p className="mt-4 text-gray-900 font-semibold">- Sam Wilson</p>
            </div>
        </div>
    </div>
</section>


                {/* Contact/Support Section */}
                <section className="py-16 bg-white">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Contact/Support</h2>
                        <div className="mt-8 max-w-3xl mx-auto text-center">
                            <p className="text-lg text-gray-600">For any inquiries or support, please contact us:</p>
                            <p className="mt-2 text-gray-900 font-semibold">Phone: (123) 456-7890</p>
                            <p className="mt-2 text-gray-900 font-semibold">Email: support@mkfleet.com</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-[#F5FCFC]">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
                        <div className="mt-8 max-w-3xl mx-auto">
                            {/* FAQ 1 */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">What is the booking process?</h3>
                                <p className="mt-2 text-gray-600">You can book a vehicle through our website or by calling our support number. Simply choose your desired vehicle, provide the necessary details, and confirm your booking.</p>
                            </div>
                            {/* FAQ 2 */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Are drivers included with every rental?</h3>
                                <p className="mt-2 text-gray-600">Yes, every vehicle rental includes a professional driver to ensure a safe and comfortable journey.</p>
                            </div>
                            {/* FAQ 3 */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">What payment methods are accepted?</h3>
                                <p className="mt-2 text-gray-600">We accept various payment methods including credit/debit cards, online banking, and mobile payment options.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;
