import React, { useEffect, useRef, useState } from "react";

function ProjectCard({ image, title, skills = [], index = 0 }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				setVisible(entry.isIntersecting);
			},
			{ threshold: 0.2 }
		);

		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`project-card ${visible ? "is-visible" : ""}`}
			style={{ animationDelay: `${index * 200}ms` }}
		>
			<img className="project-image" src={image} alt={title} />
			<h3>{title}</h3>
			<div className="tech-list">
				{skills.map((t) => (
					<span key={t}>{t}</span>
				))}
			</div>
		</div>
	);
}

export default ProjectCard;
