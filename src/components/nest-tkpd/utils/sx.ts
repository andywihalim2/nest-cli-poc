type ClassName = string | false | undefined;

const cx = (...classNames: ClassName[]) => classNames.filter(className => className).join(' ') || undefined;

export default cx;
