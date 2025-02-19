import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "499",
    description: "Perfect for small automation businesses looking to start their digital journey.",
    features: [
      "5 Standard Apps",
      "Basic White Label",
      "Up to 100 Devices",
      "Email Support",
      "Basic Analytics",
      "99.9% Uptime",
    ],
    featured: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    price: "999",
    description: "Ideal for growing businesses with custom app requirements.",
    features: [
      "15 Standard Apps",
      "Advanced White Label",
      "Up to 500 Devices",
      "Priority Support",
      "Advanced Analytics",
      "Custom App Integration",
      "99.99% Uptime",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "Custom",
    description: "For large organizations needing complete customization and control.",
    features: [
      "Unlimited Standard Apps",
      "Full White Label",
      "Unlimited Devices",
      "24/7 Support",
      "Custom Analytics",
      "Custom Development",
      "99.999% Uptime",
      "Dedicated Account Manager",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#FF2E63]">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose the right plan for your business
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start generating recurring revenue with our flexible pricing options. All plans include our core marketplace features.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-muted ${
                tier.featured
                  ? "relative bg-muted/50 lg:bg-transparent lg:shadow-2xl lg:ring-2 lg:ring-[#FF2E63]"
                  : ""
              } ${tierIdx === 0 ? "lg:rounded-r-none" : ""} ${
                tierIdx === 2 ? "lg:rounded-l-none" : ""
              }`}
            >
              <div>
                <h3 className="text-base font-semibold leading-7">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    ${tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-base text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  {tier.description}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-[#FF2E63]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={tier.featured ? "default" : "outline"}
                className={`mt-8 ${
                  tier.featured ? "bg-[#FF2E63] hover:bg-[#ff2e63]/90" : ""
                }`}
              >
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}