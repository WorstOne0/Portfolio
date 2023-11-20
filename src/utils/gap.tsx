interface GapProps {
  height: string;
  width: string;
}

const Gap = ({ height, width }: GapProps) => {
  return <div style={{ height, width }} />;
};

export default Gap;
