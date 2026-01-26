export default function GoogleCalendarEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-xl border border-black/5">
      <div className="relative w-full h-[700px]">
        <iframe
            title="IEEE TXST Calendar"
            src="https://calendar.google.com/calendar/embed?src=texasstateieee%40gmail.com&ctz=America%2FChicago"
            className="absolute inset-0 w-full h-full"
            width="800" 
            height="600"  
        />
      </div>
    </div>
  );
}