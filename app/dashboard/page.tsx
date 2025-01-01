
export default function DashboardPage() {
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Welcome to the Student Portal</h1>
        <div className="bg-[var(--secondary-bg)] text-[var(--secondary-text)] p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Event</h2>
          <p>Don't forget about the hackathon this weekend!</p>
          <button className="bg-[var(--primary-bg)] text-[var(--primary-text)] px-4 py-2 rounded mt-4 hover:bg-[var(--secondary-bg)] hover:text-[var(--secondary-text)]">
            View Details
          </button>
        </div>
      </div>
    );
  }
  