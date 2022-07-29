import Link from "next/link";

const Presenter: React.FC = () => {
  return (
    <section>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href={"/"}>
            <a className="font-semibold text-xl tracking-tight">
              React Next Sample
            </a>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Presenter;
