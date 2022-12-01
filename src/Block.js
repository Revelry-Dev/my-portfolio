export default function Block( { title, url, desc }) {
	
	
	
	return (
		
		<div class="block">
			<a rel="noreferrer" target="_blank" href={url} title={title}>{title}</a>
			<span>{desc}</span>
		</div>
	)
}