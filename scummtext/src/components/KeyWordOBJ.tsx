export default function KeyWordOBJ(props: {
  children: string;
  option: { id: string };
}) {
  return (
    <span onclick={() => console.log(props.option.id)}>{props.children}</span>
  );
}
