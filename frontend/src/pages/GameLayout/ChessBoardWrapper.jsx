import ChessBoard from "../../components/ChessBoard/ChessBoard";

const ChessBoardWrapper = () => {
  return (
    <div className="w-full flex-1 min-h-0 bg-[#1c2541] rounded-xl shadow-lg p-2">
      <div className="h-full aspect-square max-w-full mx-auto flex items-center justify-center">
        <ChessBoard />
      </div>
    </div>
  );
};

export default ChessBoardWrapper;