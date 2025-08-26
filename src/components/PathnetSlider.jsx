import '../assets/css/PathnetSlider.css'
import banner1 from '../assets/img/banner-1.jpg'
import banner2 from '../assets/img/banner-2.jpg'
import eslog1 from '../assets/img/eslog1.png'

function PathnetSlider() {
	// Data untuk slider pertama - Partner/Client Logos
	const partnerLogos = [
		{ id: 1, name: 'ESANET', url: eslog1 },
		{ id: 2, name: 'Meta', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Meta' },
		{ id: 3, name: 'Surge', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Surge' },
		{ id: 4, name: 'NTT', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=NTT' },
		{ id: 5, name: 'UIN SSC', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=UIN+SSC' },
		{ id: 6, name: 'MZ', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=MZ' },
		{ id: 7, name: 'Hotel', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=GRAGE' },
		{ id: 8, name: 'DPPKB', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=DPPKB' },
		{ id: 9, name: 'neuCentrIX', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=neuCentrIX' },
		{ id: 10, name: 'Livaysa', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Livaysa' },
		{ id: 11, name: 'Login Media', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Login+Media' },
		{ id: 12, name: 'SMK 1', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=SMK' }
	]

	// Data untuk slider kedua - Infrastructure/Technology Images
	const infrastructureImages = [
		{ id: 1, name: 'Fiber Optic Network', url: banner1 },
		{ id: 2, name: 'Data Center', url: banner2 },
		{ id: 3, name: 'Network Equipment', url: 'https://dummyimage.com/160x60/007bff/ffffff&png=1&text=Network' },
		{ id: 4, name: 'Server Room', url: 'https://dummyimage.com/160x60/28a745/ffffff&png=1&text=Server' },
		{ id: 5, name: 'Fiber Cable', url: 'https://dummyimage.com/160x60/dc3545/ffffff&png=1&text=Fiber' },
		{ id: 6, name: 'Router', url: 'https://dummyimage.com/160x60/ffc107/111827&png=1&text=Router' },
		{ id: 7, name: 'Switch', url: 'https://dummyimage.com/160x60/6f42c1/ffffff&png=1&text=Switch' },
		{ id: 8, name: 'Antenna', url: 'https://dummyimage.com/160x60/fd7e14/ffffff&png=1&text=Antenna' },
		{ id: 9, name: 'Satellite', url: 'https://dummyimage.com/160x60/20c997/ffffff&png=1&text=Satellite' },
		{ id: 10, name: 'Cloud', url: 'https://dummyimage.com/160x60/6c757d/ffffff&png=1&text=Cloud' },
		{ id: 11, name: 'Security', url: 'https://dummyimage.com/160x60/e83e8c/ffffff&png=1&text=Security' },
		{ id: 12, name: 'Backup', url: 'https://dummyimage.com/160x60/17a2b8/ffffff&png=1&text=Backup' }
	]

	// Duplicate arrays for seamless loop
	const partnerRowItems = [...partnerLogos, ...partnerLogos]
	const infrastructureRowItems = [...infrastructureImages, ...infrastructureImages]

	return (
		<div className="pathnet-sliders-container">
			{/* Slider Pertama - Partner/Client Logos */}
			<section className="pathnet py-5">
				<h2 className="section-heading text-center mb-4">DAFTAR SALURAN</h2>
				<div className="brand-rows">
					<div className="marquee" role="list" aria-label="partner logo marquee top">
						<div className="marquee__track">
							{partnerRowItems.map((item, idx) => (
								<div key={`partner-top-${item.id}-${idx}`} className="brand-slide" role="listitem">
									<div className="client-card d-flex align-items-center justify-content-center">
										<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="marquee marquee--reverse mt-3" role="list" aria-label="partner logo marquee bottom">
						<div className="marquee__track">
							{partnerRowItems.map((item, idx) => (
								<div key={`partner-bottom-${item.id}-${idx}`} className="brand-slide" role="listitem">
									<div className="client-card d-flex align-items-center justify-content-center">
										<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Slider Kedua - Infrastructure/Technology Images */}
			<section className="pathnet py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
				<h2 className="section-heading text-center mb-4">INFRASTRUKTUR TEKNOLOGI</h2>
				<div className="brand-rows">
					<div className="marquee" role="list" aria-label="infrastructure marquee top">
						<div className="marquee__track">
							{infrastructureRowItems.map((item, idx) => (
								<div key={`infra-top-${item.id}-${idx}`} className="brand-slide" role="listitem">
									<div className="client-card d-flex align-items-center justify-content-center">
										<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="marquee marquee--reverse mt-3" role="list" aria-label="infrastructure marquee bottom">
						<div className="marquee__track">
							{infrastructureRowItems.map((item, idx) => (
								<div key={`infra-bottom-${item.id}-${idx}`} className="brand-slide" role="listitem">
									<div className="client-card d-flex align-items-center justify-content-center">
										<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PathnetSlider


