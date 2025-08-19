import '../assets/css/PathnetSlider.css'

function PathnetSlider() {
	const logos = [
		{ id: 1, name: 'Meta', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Meta' },
		{ id: 2, name: 'Surge', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Surge' },
		{ id: 3, name: 'NTT', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=NTT' },
		{ id: 4, name: 'UIN SSC', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=UIN+SSC' },
		{ id: 5, name: 'MZ', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=MZ' },
		{ id: 6, name: 'Hotel', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=GRAGE' },
		{ id: 7, name: 'DPPKB', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=DPPKB' },
		{ id: 8, name: 'neuCentrIX', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=neuCentrIX' },
		{ id: 9, name: 'Livaysa', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Livaysa' },
		{ id: 10, name: 'Login Media', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Login+Media' },
		{ id: 11, name: 'SMK 1', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=SMK' },
		{ id: 12, name: 'Instansi', url: 'https://dummyimage.com/160x60/ffffff/111827&png=1&text=Instansi' }
	]

	const rowItems = [...logos, ...logos] // duplicate for seamless loop

	return (
		<section className="pathnet  py-5">
			<h2 className="section-heading text-center mb-4">DAFTAR SALURAN</h2>
			<div className="brand-rows">
				<div className="marquee" role="list" aria-label="logo marquee top">
					<div className="marquee__track">
						{rowItems.map((item, idx) => (
							<div key={`top-${item.id}-${idx}`} className="brand-slide" role="listitem">
								<div className="client-card d-flex align-items-center justify-content-center">
									<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="marquee marquee--reverse mt-3" role="list" aria-label="logo marquee bottom">
					<div className="marquee__track">
						{rowItems.map((item, idx) => (
							<div key={`bottom-${item.id}-${idx}`} className="brand-slide" role="listitem">
								<div className="client-card d-flex align-items-center justify-content-center">
									<img src={item.url} alt={item.name} className="client-logo" loading="lazy" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default PathnetSlider


