using System;

public class SpaceAge
{
    private readonly double _earthOrbital = 31557600;
    private readonly double _mercuryOrbital = 7600543.81992;
    private readonly double _venusOrbital = 19414149.052176;
    private readonly double _marsOrbital = 59354032.69008;
    private readonly double _jupiterOrbital = 374355659.124;
    private readonly double _saturnOrbital = 929292362.8848;
    private readonly double _uranusOrbital = 2651370019.3296;
    private readonly double _neptuneOrbital = 5200418560.032;
    private long _seconds;
    public SpaceAge(long seconds)
    {
        _seconds = seconds;
    }
    public double OnEarth() => this.CalcAge(_earthOrbital);
    public double OnMercury() => this.CalcAge(_mercuryOrbital);
    public double OnVenus() => this.CalcAge(_venusOrbital);
    public double OnMars() => this.CalcAge(_marsOrbital);
    public double OnJupiter() => this.CalcAge(_jupiterOrbital);
    public double OnSaturn() => this.CalcAge(_saturnOrbital);
    public double OnUranus() => this.CalcAge(_uranusOrbital);
    public double OnNeptune() => this.CalcAge(_neptuneOrbital);
    private double CalcAge(double orbital) => Math.Round(_seconds / orbital, 2);
}