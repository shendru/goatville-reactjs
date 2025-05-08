import Table from "./table";

function Manager() {
  return (
    <div className="flex-1">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Manager;
