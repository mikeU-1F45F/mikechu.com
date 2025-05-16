import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { createElement } from "react";

type Era = "past" | "present" | "future";
type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "code"
    | "span";

type TypographyProps<T extends ElementType> = {
    children: ReactNode;
    era: Era;
    variant: TypographyVariant;
    className?: string;
} & ComponentPropsWithoutRef<T>;

export function Typography<T extends ElementType = "div">({
    children,
    era,
    variant,
    className,
    ...props
}: TypographyProps<T>) {
    const isHeading = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant);
    const isCode = variant === "code";

    const eraClasses = {
        past: {
            heading: "past-heading",
            body: "past-body",
            code: "past-code",
        },
        present: {
            heading: "present-heading",
            body: "present-body",
            code: "present-code",
        },
        future: {
            heading: "future-heading",
            body: "future-body",
            code: "future-code",
        },
    };

    const sizeClasses = {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-bold",
        h3: "text-2xl font-semibold",
        h4: "text-xl font-semibold",
        h5: "text-lg font-medium",
        h6: "text-base font-medium",
        p: "text-base",
        code: "text-sm",
        span: "text-base",
    };

    const typeClass = isHeading
        ? eraClasses[era].heading
        : isCode
          ? eraClasses[era].code
          : eraClasses[era].body;

    return createElement(
        variant,
        {
            className: cn(typeClass, sizeClasses[variant], className),
            ...props,
        },
        children,
    );
}

// Convenience components for each era
export function PastTypography<T extends ElementType = "div">({
    children,
    variant,
    className,
    ...props
}: Omit<TypographyProps<T>, "era">) {
    return (
        <Typography
            era="past"
            variant={variant}
            className={className}
            {...props}
        >
            {children}
        </Typography>
    );
}

export function PresentTypography<T extends ElementType = "div">({
    children,
    variant,
    className,
    ...props
}: Omit<TypographyProps<T>, "era">) {
    return (
        <Typography
            era="present"
            variant={variant}
            className={className}
            {...props}
        >
            {children}
        </Typography>
    );
}

export function FutureTypography<T extends ElementType = "div">({
    children,
    variant,
    className,
    ...props
}: Omit<TypographyProps<T>, "era">) {
    return (
        <Typography
            era="future"
            variant={variant}
            className={className}
            {...props}
        >
            {children}
        </Typography>
    );
}
