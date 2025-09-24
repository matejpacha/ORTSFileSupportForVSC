comment(
This is a sample INC (include) file for Train Simulator
Include files are commonly used for shared configurations
)

comment (** Common locomotive parameters for diesel engines **)

ORTSDieselEngines (
	DieselEngine (
		IdleRPM ( 650 )
		MaxRPM ( 1800 )
		MaxRatedPower ( 2000kW )
		
		DieselPowerTab (
			DieselPowerTabEntry ( 650 150kW )
			DieselPowerTabEntry ( 1000 800kW )
			DieselPowerTabEntry ( 1500 1500kW )
			DieselPowerTabEntry ( 1800 2000kW )
		)
		
		DieselConsumptionTab (
			DieselConsumptionTabEntry ( 650 45L/h )
			DieselConsumptionTabEntry ( 1000 95L/h )
			DieselConsumptionTabEntry ( 1500 150L/h )
			DieselConsumptionTabEntry ( 1800 200L/h )
		)
	)
)

comment( Standard brake configuration )
ORTSBrakeShoeFriction (
	BrakeShoeFrictionEntry ( 0.0 0.38 )
	BrakeShoeFrictionEntry ( 5.0 0.35 )
	BrakeShoeFrictionEntry ( 20.0 0.30 )
	BrakeShoeFrictionEntry ( 40.0 0.25 )
)

comment (** This include file can be referenced from main ENG files **)